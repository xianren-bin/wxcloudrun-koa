const db = require('../config/dbconfig');
const User = {
    findOne: async (userName) => {
        return new Promise((resolve,reject)=>{
            let sql = `select * from iplatform.userinfo where USER_CODE = '${userName}' or MOBILEPHONE='${userName}' or LOGON_CODE='${userName}'`;
            db.query(sql, (err, data) => {
                if (err) return console.log(err.message);
                if (data.length === 0) return console.log('获取失败');
                resolve(data[0]);
            }) 
        })
    },
    upDate: async (updateObj,key) => {
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE iplatform.userinfo SET `;
            let filters = [];
            let sqlArr = []
            for (let i in updateObj) {
                sqlArr.push(`${i} = ?`);
                filters.push(updateObj[i])
            }
            sql += sqlArr.join(' AND')
            sql += ` where USER_CODE = ?  or MOBILEPHONE = ?`;
            filters.push(key);
            filters.push(key);
            db.query(sql, filters, (err, data) => {
                resolve({
                    code: 0,
                    data: "更新成功",
                    message: ""
                })
            }) 
        })
    },
}

module.exports = User