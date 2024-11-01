const db = require('../config/dbconfig');
const pageAction = require('./page');
const executeAction = require('./execute');
const datasetAction = require('./dataset');
const {
    generateUUID
} = require('../../../utils/method');
const query = async (webpageid) => {
    return new Promise(async (resolve, reject) => {
        console.log("查询功能");
        const jsonData = await queryWebPage(webpageid);
        if (!jsonData) {
            resolve({
                code: -1,
                data: {
                    "name": webpageid,
                    "system": "CS195",
                    "dataModel": {
                        "datas": []
                    },
                    "executeModel": {
                        "executes": []
                    },
                    "pageModelJson": "",
                    "pages": [],
                    "lockedBean": {
                        "lockedUserCode": "",
                        "lockedUserName": "",
                        "lockedTime": "",
                        "status": "0"
                    },
                    "id": "",
                    "pageEvents": "[]",
                    "access": false,
                    "platformEdit": true,
                    "auth": false,
                    "fileExt": ".s",
                    "userName": "超级管理员",
                    "version": 3,
                    "userCode": "yousuper",
                    "content": "",
                    "createTime": new Date().Format("yyyy-MM-dd hh:mm:ss"),
                    "mobileContent": "",
                    "lastModifyTime": new Date().Format("yyyy-MM-dd hh:mm:ss"),
                    "platformVersion": "1",
                    "renderType": "0",
                    "status": "0"
                },
                message: "未查到功能页面，正在新建..."
            });
            return;
        }
        let pageJson = {};
        try {
            pageJson = JSON.parse(jsonData.pageJson)
        } catch (error) {

        }
        pageJson.pages = [];
        const pages = await pageAction.query(null, webpageid);
        for (const p in pages) {
            try {
                const jsondata = JSON.parse(pages[p].pageJson);
                jsondata.pageid = pages[p].pageid;
                pageJson.pages.push(jsondata);
            } catch (error) {

            }
        }
        pageJson.executeModel = {};
        pageJson.executeModel.executes = await executeAction.query(null, webpageid);
        pageJson.dataModel = {};
        pageJson.dataModel.datas = await datasetAction.query(null, webpageid);
        resolve({
            code: 0,
            data: pageJson,
            message: ""
        });
    })
}
const queryWebPage = async (webpageid) => {
    return new Promise((resolve, reject) => {
        db.querySync(`select * from iplatform.iplatform_webpage where webpageid=?`, [webpageid]).then(({
            results
        }) => {
            if (!results || results.length === 0) {
                resolve(null);
                return
            };
            resolve(results[0]);
        }).catch(err => {
            if (err) {
                resolve(null);
                return console.log(err.message)
            };
        });
    })
}
const add = async (formjson,user) => {
    return new Promise(async (resolve, reject) => {
        const page = await queryWebPage(formjson.id);
        if (page) {
            resolve({
                code: -1,
                message: "页面编号已存在，请重新输入"
            })
        }
        const newformjson = {
            "id": "",
            "name": "",
            "system": "",
            "fileExt": "",
            "dataModel": {
                "datas": []
            },
            "executeModel": {
                "executes": []
            },
            "pageModelJson": "",
            "pages": [],
            "lockedBean": {},
            "pageEvents": "[]",
            "access": false,
            "platformEdit": true,
            "auth": false,
            "userName": user.USER_NAME,
            "version": 3,
            "userCode": user.userCode,
            "content": "",
            "createTime": new Date().Format("yyyy-MM-dd hh:mm:ss"),
            "mobileContent": "",
            "lastModifyTime": new Date().Format("yyyy-MM-dd hh:mm:ss"),
            "platformVersion": "1",
            "renderType": "0",
            "status": "0"
        }
        Object.assign(newformjson, formjson);
        const filters = [];
        filters.push(newformjson.name);
        filters.push(newformjson.fileExt);
        filters.push(JSON.stringify(newformjson));
        let sql = `INSERT INTO iplatform.iplatform_webpage (name, type, pageJson, webpageid) VALUES (?, ?, ?, ?); `;
        filters.push(newformjson.id)
        db.query(sql, filters, (err, data) => {
            if (err) return console.log(err.message);
            resolve({
                code: 0,
                data: newformjson.id,
                message: "保存成功"
            })
        })
    })
}

const save = async (formjson) => {
    return new Promise(async (resolve, reject) => {
        const filters = [];
        let sql;
        filters.push(formjson.name);
        filters.push(formjson.fileExt);
        filters.push(formjson.system);
        filters.push(formjson.userCode);
        filters.push(formjson.version);
        filters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
        filters.push(formjson.status);
        if (formjson.id) {
            filters.push(JSON.stringify(formjson));
            sql = `UPDATE iplatform.iplatform_webpage SET  name=?, type=?, systemCode=?, userCode=?, version=?, lastModifyTime=?, status=?, pageJson=? where webpageid=?`;
            filters.push(formjson.id);
        } else {
            formjson.id = formjson.name;
            filters.push(JSON.stringify(formjson));
            sql = `INSERT INTO iplatform.iplatform_webpage (name, type, systemCode, userCode, version, createTime, status, pageJson, webpageid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?); `;
            filters.push(formjson.id);
        }
        const pages = formjson.pages;
        for (let p in pages) {
            pageAction.save(pages[p], formjson.id)
        }
        db.query(sql, filters, (err, data) => {
            if (err) return console.log(err.message);
            resolve({
                code: 0,
                data: formjson.id,
                message: "保存成功"
            })
        })
    })
}

const queryWebPages = async (type,systemcode) => {
    return new Promise((resolve, reject) => {
        let sql = `select a.webpageid,a.name,a.type,a.systemCode,a.createTime,a.userCode,a.version,a.status,DATE_FORMAT(a.lastModifyTime, '%Y-%m-%d %H:%i:%s') AS updateTime,SYSTEM_NAME systemName  from iplatform.iplatform_webpage a,iplatform.system_info s where a.systemCode=s.SYSTEM_CODE and a.type=? `;
        const filles = [];
        filles.push(type);
        if (systemcode) {
            sql += `and systemcode=?`
            filles.push(systemcode)
        }
        db.querySync(sql, filles).then(({
            results
        }) => {
            console.log(results);
            if (!results || results.length === 0) {
                resolve([]);
                return
            };
            resolve(results);
        }).catch(err => {
            if (err) {
                resolve(null);
                return console.log(err.message)
            };
        });
    })
}
module.exports = {
    query,
    save,
    add,
    queryWebPages
}