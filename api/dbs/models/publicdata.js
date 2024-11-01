const db = require('../config/dbconfig');
const QueryData = {
    findOne: async (script) => {
        return new Promise((resolve,reject)=>{
            db.query(script.sql,script.filters, (err, data) => {
                if (err) return console.log(err.message);
                if (data.length === 0) return console.log('获取失败');
                resolve(data[0]);
            }) 
        })
    },
    
    findSome: async (script) => {
        return new Promise((resolve,reject)=>{
            db.query(script.sql,script.filters, (err, data) => {
                if (err) return console.log(err.message);
                resolve(data);
            }) 
        })
    }
}

module.exports = QueryData