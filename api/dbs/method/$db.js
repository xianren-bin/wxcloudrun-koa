
const syncmysql = require('sync-mysql');
const connection = new syncmysql({
    "host": "120.55.92.78",
    "port": "3306",
    "user": "root",
    "password": "bin19930214...",
    "useConnectionPooling": true,
    "database": ""
})

const $db = {
  query: (sql,filters) => {
    const rows = connection.query(sql,filters);
    return rows;
  },
  saveOrUpdateEntity:  (BusinessObject,conditions,property,custom)=> {
    let conditionssql = ""
    for (let c in conditions) {
        conditionssql += `${c} = "${conditions[c]}" and `
    }
    conditionssql += "1=1";
    console.log(`select 1 from ${BusinessObject} where ${conditionssql}`);
    const b = connection.query(`select 1 from ${BusinessObject} where ${conditionssql}`);
    
    if (b.length > 0) {
        let propertysql = []
        for (let c in property) {
            propertysql.push(`${c} = "${property[c]}"`)
        }
        propertysql = propertysql.join();
        console.log(`UPDATE ${BusinessObject} SET ${propertysql} where ${conditionssql}`);
        connection.query(`UPDATE ${BusinessObject} SET ${propertysql} where ${conditionssql}`);
    } else {
        let propertykey = [],propertyvalue = [];
        for (let c in property) {
            propertykey.push(c);
            propertyvalue.push(`'${property[c]}'`)
        }
        propertykey = propertykey.join();
        propertyvalue = propertyvalue.join();
        console.log(`INSERT INTO ${BusinessObject} (${propertykey}) VALUES (${propertyvalue})`);
        connection.query(`INSERT INTO ${BusinessObject} (${propertykey}) VALUES (${propertyvalue})`);
    }
  }
}
module.exports = $db