const { generateUUID } = require('../../../utils/method');
const db = require('../config/dbconfig');
const query = async (pageid,webpageid,id) => {
    return new Promise((resolve, reject) => {
        console.log("查询功能页面列表");
        if (webpageid && id) {
            db.query(`select * from iplatform.iplatform_page where webpageid=? and id=?`,[webpageid,id], (err, data) => {
                if (err) return console.log(err.message);
                let pageJson = {};
                try {
                    pageJson = JSON.parse(data[0].pageJson)
                } catch (error) {
                    
                }
                resolve(pageJson);
            })
        } else if (webpageid) {
            db.query(`select * from iplatform.iplatform_page where webpageid=?`,[webpageid], (err, data) => {
                if (err) return console.log(err.message);
                resolve(data)
            })
        } else if (pageid) {
            db.query(`select * from iplatform.iplatform_page where pageid=?`,[pageid], (err, data) => {
                if (err) return console.log(err.message);
                if (data.length === 0) return console.log('获取失败');
                resolve(data[0]);
            })
        } else {
            resolve([])
        }
    })
}
const add = async (page) => {
    return new Promise((resolve, reject) => {
        db.query(script.sql, script.filters, (err, data) => {
            if (err) return console.log(err.message);
            resolve(data);
        })
    })
}
const save = async (pagejson, webpageid) => {
    return new Promise(async (resolve, reject) => {
        const filters = [];
        filters.push(pagejson.id);
        filters.push(pagejson.name);
        filters.push(JSON.stringify(pagejson));
        filters.push(webpageid);
        let sql;
        if (!pagejson.pageid) {
            const b = await db.querySync("select 1 from iplatform.iplatform_page where webpageid=? and id=?",[webpageid,pagejson.id])
            if (!b?.results?.length) {
                sql = `INSERT INTO iplatform.iplatform_page (id, name, pageJson, webpageid, pageid) VALUES (?, ?, ?, ?, ?); `;
                pagejson.pageid = generateUUID();
                filters.push(pagejson.pageid)
            } else {
                sql = `UPDATE iplatform.iplatform_page SET id=?, name=?, pageJson=?, webpageid=? where  pageid=?`;
                pagejson.pageid = generateUUID();
                filters.push(pagejson.pageid);
            }
        } else {
            sql = `UPDATE iplatform.iplatform_page SET id=?, name=?, pageJson=?, webpageid=? where  pageid=?`;
            filters.push(pagejson.pageid);
        }
        db.query(sql, filters, (err, data) => {
            if (err) return console.log(err.message);
            resolve({
                code: 0,
                data: pagejson.pageid,
                message: ""
            })
        })
    })
}

module.exports = {query,save, add}