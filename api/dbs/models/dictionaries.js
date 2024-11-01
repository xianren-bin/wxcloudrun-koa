const { generateUUID } = require('../../../utils/method');
const db = require('../config/dbconfig');
const dictionaries = {
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

    FormData: async (systemCode) => {
        return new Promise(async (resolve,reject)=>{
            const {results} = await db.querySync(`select * from iplatform.IPlatformDict where systemCode=?`,[systemCode])
            for (var i in results) {
                results[i].code = results[i].dictCode;
                results[i].name = results[i].dictName;
                const DictItem = await db.querySync(`select * from iplatform.IPlatformDictItem where dictId=?`,[results[i].dictId])
                results[i].items = DictItem.results||[];
            }
            resolve(results);
        })
    },

}

module.exports = dictionaries