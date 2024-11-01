const { generateUUID } = require('../../../utils/method');
const db = require('../config/dbconfig');
const datasetAction = {
    save: async (datasets) => {
        return new Promise(async (resolve,reject)=>{
            const dfilters = [];
            dfilters.push(datasets.id)
            dfilters.push(datasets.name)
            dfilters.push(datasets.script)
            dfilters.push(JSON.stringify(datasets.params))
            dfilters.push(JSON.stringify(datasets))
            dfilters.push(datasets.webpageid)
            if (datasets.datasetid) {
                dfilters.push(datasets.datasetid)
                db.query(`UPDATE iplatform.iplatform_dataset SET id=?, name=?, script=?, params=?, jsonMode=?, webpageid=? WHERE datasetid = ?;`, dfilters,(err, data) => {
                    if (err) return console.log(err.message);
                    resolve({
                        code: 0,
                        data: datasets.datasetid,
                        message: "保存成功"
                    })
                })
            } else {
                const uuid = generateUUID();
                dfilters.push(uuid)
                db.query(`INSERT INTO iplatform.iplatform_dataset (id, name, script, params, jsonMode, webpageid,datasetid)
                VALUES (?, ?, ?, ?, ?,?,?); `, dfilters,(err, data) => {
                    if (err) return console.log(err.message);
                    resolve({
                        code: 0,
                        data: uuid,
                        message: "保存成功"
                    })
                }) 
            }
        })
    },
    delete: async (datasetid) => {
        return new Promise(async (resolve,reject)=>{
            db.query(`delete from iplatform.iplatform_dataset WHERE datasetid = ?;`, [datasetid],(err, data) => {
                if (err) return console.log(err.message);
                resolve({
                    code: 0,
                    data: "",
                    message: "删除成功"
                })
            })
        })
    },
    
    query:  async (datasetid,webpageid,id) => {
        return new Promise((resolve,reject)=>{
            console.log("查询数据集列表");
            if (webpageid && id) {
                db.query(`select * from iplatform.iplatform_dataset where webpageid=? and id=?`,[webpageid,id], (err, data) => {
                    if (err) return console.log(err.message);
                    if (!data || data.length === 0) {resolve(null); return console.log('获取失败')};
                    let jsonMode = {};
                    try {
                        jsonMode = JSON.parse(data[0].jsonMode)
                    } catch (error) {
                        
                    }
                    resolve(jsonMode);
                })
            } else if (webpageid) {
                db.query(`select * from iplatform.iplatform_dataset where webpageid=?`,[webpageid], (err, data) => {
                    if (err) return console.log(err.message);
                    const rearr = [];
                    for (let d in data) {
                        try {
                            const jsonMode = JSON.parse(data[d].jsonMode);
                            jsonMode.datasetid = data[d].datasetid;
                            rearr.push(jsonMode)
                        } catch (error) {
                            
                        }
                    }
                    resolve(rearr)
                })
            } else if (datasetid) {
                db.query(`select * from iplatform.iplatform_dataset where datasetid=?`,[datasetid], (err, data) => {
                    if (err) return console.log(err.message);
                    if (data.length === 0) {resolve(null); return console.log('获取失败')};
                    let jsonMode = {};
                    try {
                        jsonMode = JSON.parse(data[0].jsonMode)
                    } catch (error) {
                        
                    }
                    resolve(jsonMode);
                })
            } else {
                resolve([])
            }
        }) 
    },

    FormData: async (postData,logonUser) => {
        return new Promise(async (resolve,reject)=>{
            const webFormId = postData.webFormId,id = postData.pageData.id;
            if (!webFormId || !id)  resolve({code: -1,message: "查询错误"});
            db.query('select * from iplatform.iplatform_dataset where webpageid = ? and id = ?',[webFormId,id],(err, data) => {
                if (err) {
                    resolve({code: -1,message: "查询错误"});
                    return console.log(err.message)
                };
                if (data.length === 0) {resolve(null); return console.log('获取失败')};
                const pageData = data[0];
                let evalscript = pageData.script;

                let params = pageData.params;
                try {
                    params = JSON.parse(params)
                } catch (error) {
                    params = [];
                }
                try {
                    evalscript = evalscriptfun(evalscript,params,postData.params,logonUser);
                } catch (error) {
                    
                    resolve({
                        code: -1,
                        error: error,
                        message:"数据集语句错误",
                        data:{}
                    });
                }
                let limit = " ";
                if (postData.pager) {
                    limit = " limit " + (postData.pager.page-1) * postData.pager.rows +","+ postData.pager.rows;
                    db.query(evalscript.sql,evalscript.filters, (err, data) => {
                        if (err) {
                            resolve({code: -1,message: "查询错误："+err.message});
                            return console.log(err.message)
                        };
                        const totalRecords = data.length;
                        db.query(evalscript.sql + " " + (evalscript.orderBy||"") + limit,evalscript.filters, (err, data, fields) => {
                            if (err) return console.log(err.message);
                            resolve({
                                code: 0,
                                message:"",
                                data:{
                                    dataList:data,
                                    dataMeta:{
                                        columns: fields,
                                        pagination: {
                                            currentPage: postData.pager.page,
                                            pageSize: postData.pager.rows,
                                            totalRecords: totalRecords
                                        }
                                    }
                                }
                            });
                        }) 
                    })
                } else {
                    db.query(evalscript.sql + " " + (evalscript.orderBy||"") + limit,evalscript.filters, (err, data, fields) => {
                        if (err) return console.log(err.message);
                        resolve({
                            code: 0,
                            message:"",
                            data:{
                                dataList:data,
                                dataMeta:{
                                    columns: fields,
                                    pagination: {
                                        totalRecords: data.length
                                    }
                                }
                            }
                        });
                    }) 
                }
            })
        })
    },

}

const evalscriptfun = function(evalscript,params,postData,logonUser) {
    
    for(let p in params){
        const id = params[p].id;
        if (id) {
            eval(`var ${id} = params[p].defaultValue||'';`);
        }
    }
    params = postData||[];
    for(let p in params){
        eval(`var ${p} = params[p]`);
    }
    let iplatform_returnValue;
    let tipsMessage = "";
    const iplatform_current_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
    iplatform_returnValue = eval(evalscript);
    // console.log(iplatform_returnValue);
    return iplatform_returnValue;
}
module.exports = datasetAction