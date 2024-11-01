const mysql = require('mysql');
const config = require('./config.json');
let connection;
function handleDisconnection() {
    // 配置数据库
    connection = mysql.createPool(config);
    connection.connect(function (err) {
        if (err) {
            console.log('db connect error:' + err.message + "2秒后重连");
            handleDisconnection();
        }
    });
    connection.on('error', function (err) {
        console.log(2222222);
        console.log(err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('db error执行重连:' + err.message);
            handleDisconnection();
        } else {
            throw err;
        }
    });
    connection.querySync = function (sql) {
        return new Promise(function (resolve, reject) {
            connection.query(sql, function (error, results, fields) {
                if (error) reject(error);
                else resolve({
                    results,
                    fields
                })
            })
        })
    };
}

handleDisconnection();
module.exports = connection;