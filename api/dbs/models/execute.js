const { generateUUID } = require('../../../utils/method');
const db = require('../config/dbconfig');
const $db = require('../method/$db');
const $string = require('../method/$string');
const executeAction = {
    save: async (execute) => {
        return new Promise(async (resolve,reject)=>{
            const dfilters = [];
            dfilters.push(execute.id)
            dfilters.push(execute.name)
            dfilters.push(execute.script)
            dfilters.push(JSON.stringify(execute.params))
            dfilters.push(JSON.stringify(execute))
            dfilters.push(execute.webpageid)
            if (execute.executeid) {
                dfilters.push(execute.executeid)
                db.query(`UPDATE iplatform.iplatform_execute SET id=?, name=?, script=?, params=?, jsonMode=?, webpageid=? WHERE executeid = ?;`, dfilters,(err, data) => {
                    if (err) return console.log(err.message);
                    resolve({
                        code: 0,
                        data: execute.executeid,
                        message: "保存成功"
                    })
                })
            } else {
                const uuid = generateUUID();
                dfilters.push(uuid)
                db.query(`INSERT INTO iplatform.iplatform_execute (id, name, script, params, jsonMode, webpageid,executeid)
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
    delete: async (executeid) => {
        return new Promise(async (resolve,reject)=>{
            db.query(`delete from iplatform.iplatform_execute WHERE executeid = ?;`, [executeid],(err, data) => {
                if (err) return console.log(err.message);
                resolve({
                    code: 0,
                    data: "",
                    message: "删除成功"
                })
            })
        })
    },
    query:  async (executeid,webpageid,id) => {
        return new Promise((resolve,reject)=>{
            console.log("查询业务逻辑列表");
            if (webpageid && id) {
                db.query(`select * from iplatform.iplatform_execute where webpageid=? and id=?`,[webpageid,id], (err, data) => {
                    if (err) return console.log(err.message);
                    if (!data || data.length === 0) return console.log('获取失败');
                    let jsonMode = {};
                    try {
                        jsonMode = JSON.parse(data[0].jsonMode)
                    } catch (error) {
                        
                    }
                    resolve(jsonMode);
                })
            } else if (webpageid) {
                db.query(`select * from iplatform.iplatform_execute where webpageid=?`,[webpageid], (err, data) => {
                    if (err) return console.log(err.message);
                    const rearr = [];
                    for (let d in data) {
                        try {
                            const jsonMode = JSON.parse(data[d].jsonMode);
                            jsonMode.executeid = data[d].executeid;
                            rearr.push(jsonMode)
                        } catch (error) {
                            
                        }
                    }
                    resolve(rearr)
                })
            } else if (executeid) {
                db.query(`select * from iplatform.iplatform_execute where executeid=?`,[executeid], (err, data) => {
                    if (err) return console.log(err.message);
                    if (data.length === 0) return console.log('获取失败');
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
            const webFormId = postData.iplatform_web_form_id,id = postData.iplatform_web_form_execute;
            if (!webFormId || !id)  resolve({code: -1,message: "查询错误"});
            db.query('select * from iplatform.iplatform_execute where webpageid = ? and id = ?',[webFormId,id],(err, data) => {
                if (err) {
                    resolve({code: -1,message: "查询错误"});
                    return console.log(err.message)
                };
                if (data.length === 0) return console.log('获取失败');
                const pageData = data[0];
                let evalscript = pageData.script;
                let params = pageData.params;
                try {
                    params = JSON.parse(params)
                } catch (error) {
                    params = [];
                }
                let evalscriptValue = {};
                try {
                    evalscriptValue = evalscriptfun(evalscript,params,postData,logonUser);
                } catch (error) {
                    
                    resolve({
                        code: -1,
                        error:error,
                        message:"查询语句错误",
                        data:{}
                    });
                }
                resolve({
                    code: 0,
                    data: evalscriptValue.data,
                    message: evalscriptValue.tipsMessage||""
                })
                // db.query(evalscript.sql,evalscript.filters, (err, data) => {
                //     if (err) return console.log(err.message);
                //     resolve({
                //         code: 0,
                //         message:"",
                //         data:{
                //             dataList:data,
                //             dataMeta:{}
                //         }
                //     });
                // }) 
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
    const iplatform_returnValue = {}
    let tipsMessage = "";
    const iplatform_current_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
    iplatform_returnValue.data = eval(evalscript);
    iplatform_returnValue.tipsMessage = tipsMessage;
    return iplatform_returnValue;
}
module.exports = executeAction