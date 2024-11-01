const mysql = require('mysql');
const config = require('./config.json');
let connection;
function handleDisconnection() {
    // 配置数据库
    connection = mysql.createConnection(config);
    connection.connect(function (err) {
        if (err) {
            console.log('db connect error:' + err.message + "2秒后重连");
            setTimeout(handleDisconnection, 2000);
        }
    });
    connection.on('error', function (err) {
        console.log(err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('db error执行重连:' + err.message);
            handleDisconnection();
        } else {
            throw err;
        }
    });
    connection.querySync = function (sql,filters=[]) {
        return new Promise(function (resolve, reject) {
            connection.query(sql, filters, function (error, results, fields) {
                if (error) reject(error);
                else resolve({
                    results,
                    fields
                })
            })
        })
    };
}
setInterval(() => {
    connection.querySync("select 1").then((results) => {
        
    }).catch(err => {
        console.log('db connect error:' + err.message + "2秒后重连");
        handleDisconnection();
    })
}, 5000);
handleDisconnection();
module.exports = connection;