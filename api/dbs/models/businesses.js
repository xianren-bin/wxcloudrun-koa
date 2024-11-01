const { log } = require('console');
const { generateUUID } = require('../../../utils/method');
const db = require('../config/dbconfig');
const fs = require('fs');  
const path = require('path'); 

const save = async (mol,user) => {
    return new Promise(async (resolve,reject)=>{
        const modelId = await saveModel(mol,user);
        
    })
}
const saveModel = async (mol,user) => {
    return new Promise(async (resolve,reject)=>{
        const model = await db.querySync(`select * from iplatform.IPlatformModel where modelCode=?`,[mol.code]);
        const models = model.results||[];
        if (models.length > 0) {
            const modelId = models[0].modelId;
            const filters = [];
            filters.push(mol.name)
            filters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"))
            filters.push(modelId)
            await db.querySync(`UPDATE iplatform.IPlatformModel SET modelName=?,updateTime=? where modelId = ?`,filters);
            resolve(modelId)
        } else {
            const modelId = generateUUID();
            const filters = [];
            filters.push(mol.code)
            filters.push(mol.name)
            filters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"))
            filters.push(user.userCode)
            filters.push(modelId)
            await db.querySync(`INSERT INTO iplatform.IPlatformModel (modelCode,modelName,createTime,creator,modelId) VALUES (?,?,?,?,?)`,filters);
            resolve(modelId)
        }
    })
}

const deleteMol = async (executeid) => {
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
};
const query = async (executeid,webpageid,id) => {
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
};

const queryModels = async (stringkey) => {
    return new Promise(async (resolve,reject)=>{
        let sql = `select a.*,DATE_FORMAT(a.updateTime, '%Y-%m-%d %H:%i:%s') AS updateTime,DATE_FORMAT(a.createTime, '%Y-%m-%d %H:%i:%s') AS createTime,GROUP_CONCAT(systemName) AS systemNames from iplatform.iplatformmodel a,iplatform.iplatformsystemmodelrelation b where a.modelCode=b.modelCode and a.isDel=0  GROUP BY a.modelId`
        const filters = [];
        if (stringkey) {
            sql += ` and (a.modelCode like ? or a.modelName like ?)`;
            filters.push('%'+stringkey+'%');
            filters.push('%'+stringkey+'%');
        }
        const {results} = await db.querySync(sql,filters);
        resolve(results);
    })
}

const FormData = async (systemCode) => {
    return new Promise(async (resolve,reject)=>{
        const {results} = await db.querySync(`select modelCode code,SYSTEM_CODE systemCode,SYSTEM_NAME name,SYSTEM_VERSION version from iplatform.system_info where SYSTEM_CODE=?`,[systemCode]);
        for (var i in results) {
            const model = await db.querySync(`select modelId code,modelCode,modelName name from iplatform.IPlatformModel where modelCode=?`,[results[i].code]);
            const models = model.results||[];
            for (var m in models) {
                const businessObject = await db.querySync(`select objectCode code,moduleCode model,objectName name,objectId from iplatform.IPlatformModelObject where modelId=?`,[models[m].code]);
                const businessObjects = businessObject.results||[];
                for (var b in businessObjects) {
                    const attribute = await db.querySync(`select fieldCode code,fieldName name from iplatform.IPlatformModelObjectField where objectId=?`,[businessObjects[b].objectId]);
                    const attributes = attribute.results||[];
                    businessObjects[b].attributes = attributes;
                }
                models[m].businessObjects = businessObjects;
            }
            results[i].models = models;
        }
        resolve(results);
    })
}

const businessMode = async (systemCode) => {
    return new Promise(async (resolve,reject)=>{
        try {  
            const filePath = path.resolve(__dirname, "../../../src/businessmode/"+systemCode+".json"); 
            const dataSync = fs.readFileSync(filePath, 'utf8');  
            const jsonDataSync = JSON.parse(dataSync);  
            resolve(jsonDataSync);
        } catch (err) {  
            console.error('An error occurred (sync):', err);
            reject(err)
        }
    })
};
const savebusinessMode= async (jsonDataSync,user) => {
    return new Promise(async (resolve,reject)=>{
        try {
            jsonDataSync = JSON.parse(jsonDataSync);

            const modelId = await saveModel(jsonDataSync,user);
            const models = jsonDataSync.models;
            if (jsonDataSync.syncData) {
                for (let m in models) {
                    const model = models[m];
                    const businessObjects = model.businessObjects;
                    await db.querySync(`UPDATE iplatform.IPlatformModelObject SET isDel='1' where modelCode=?`,[jsonDataSync.code]);
                    for (let b in businessObjects) {
                        const bObject = businessObjects[b];
                        const objMap = {};
                        objMap.modelCode = bObject.modelCode;
                        objMap.objectCode = bObject.code;
                        objMap.objectName = bObject.name;
                        objMap.modelId = modelId;
                        objMap.modelCode = jsonDataSync.code;
                        objMap.moduleName = model.name;
                        objMap.moduleCode = model.code;
                        objMap.isDel ="0";
                        const ObjectId = await saveOrUpdateEntity("iplatform.IPlatformModelObject",{objectCode:bObject.code,modelCode:jsonDataSync.code},objMap,"objectId");
                        await db.querySync(`DELETE from iplatform.IPlatformModelObjectField where objectId=?`,[ObjectId]);
                        const attributes = bObject.attributes;
                        for (const a in attributes) {
                            const attr = attributes[a];
                            const fieldId = generateUUID();
                            const property = {};
                            property.fieldId = fieldId;
                            property.comment = attr.comment;
                            property.dictCode = attr.dict;
                            property.fieldCode = attr.code;
                            property.fieldDefVal = attr.defaultValue;
                            property.fieldLen = attr.length;
                            property.fieldName = attr.name;
                            property.fieldType = attr.type;
                            property.fieldUI = attr.defaultUI;
                            property.idgenerator = attr.idgenerator;
                            property.isForeign = attr.foreign? 1 : 0;
                            property.isNullable = attr.nullable? 1 : 0;
                            property.isPrimary = attr.primary? 1 : 0;
                            property.isUnique = attr.unique? 1 : 0;
                            property.modelId = modelId;
                            property.modelCode = jsonDataSync.code;
                            property.objectCode = bObject.code;
                            property.ObjectId = ObjectId;
                            property.orderNum = a+1;
                            await saveEntity("iplatform.IPlatformModelObjectField",property,"fieldId");
                        }
                    }
                }
            }
            const systemCode = jsonDataSync.code;
            const filePath = path.resolve(__dirname, "../../../src/businessmode/"+systemCode+".json"); 
            let str = JSON.stringify(jsonDataSync);
            fs.writeFile(filePath,str,function(err){
                if(err){
                    resolve({code: -1, message: '新增失败' + err})
                }
                resolve({code: 0, message: '新增成功',data:modelId})
            })
            await initdatabase(jsonDataSync)
        } catch (err) {  
            console.error('An error occurred (sync):', err);
            reject(err)
        }
    })
}
const initdatabase = async (mol) => {
    const models = mol.models;
    for (let m in models) {
        const model = models[m];
        const businessObjects = model.businessObjects;
        await db.querySync(`CREATE DATABASE IF NOT EXISTS ${mol.code};`,);
        for (let b in businessObjects) {
            const bObject = businessObjects[b];
            const attributes = bObject.attributes;
            const attrArr = [];
            for (const a in attributes) {
                let attrString = "";
                const attr = attributes[a];
                attrString += attr.code;
                switch (attr.type) {
                    case "VARCHAR":
                        attrString += " VARCHAR("+attr.length+")"
                        break;
                    case "INT":
                        attrString += " INT"
                        break;
                    default:
                        attrString += " "+attr.type
                        break;
                }
                if (attr.unique) {
                    attrString += " unique"
                }
                if (attr.primary) {
                    attrString += " PRIMARY KEY"
                }
                if (!attr.nullable) {
                    attrString += " NOT NULL"
                }
                if (attr.defaultValue !== undefined && attr.defaultValue !== null && attr.defaultValue !== "") {
                    attrString += " DEFAULT '"+attr.defaultValue+"'"
                }
                attrString += " COMMENT '" + attr.name + "'";
                attrArr.push(attrString);
            }
            const sqlstring = attrArr.join(",");
            await db.querySync(`CREATE TABLE IF NOT EXISTS ${mol.code}.${bObject.code} (${sqlstring})`);
            // console.log(`CREATE TABLE IF NOT EXISTS ${bObject.code} (${sqlstring})`);
        }
    }
}
const saveEntity = async (BusinessObject,property,key)=> {
    return new Promise(async (resolve,reject)=>{
        let propertykey = [],propertyvalue = [],propertyvalueArr = [];
        property[key] = property[key]||generateUUID();
        for (let c in property) {
            propertykey.push(c);
            propertyvalue.push("?")
            propertyvalueArr.push(property[c])
        }
        propertykey = propertykey.join();
        propertyvalue = propertyvalue.join();
        await db.querySync(`INSERT INTO ${BusinessObject} (${propertykey}) VALUES (${propertyvalue}); `,propertyvalueArr);
        resolve(property[key])
    })
}
const saveOrUpdateEntity = async (BusinessObject,conditions,property,key)=> {
    return new Promise(async (resolve,reject)=>{
        let conditionssql = ""
        for (let c in conditions) {
            conditionssql += `${c} = "${conditions[c]}" and `
        }
        conditionssql += "1=1";
        const b = await db.querySync(`select ${key} from ${BusinessObject} where ${conditionssql}`);
        if (b.results.length > 0) {
            let propertysql = []
            for (let c in property) {
                propertysql.push(`${c} = "${property[c]}"`)
            }
            propertysql = propertysql.join();
            await db.querySync(`UPDATE ${BusinessObject} SET ${propertysql} where ${conditionssql}`);
            resolve(b.results[0][key])
        } else {
            let propertykey = [],propertyvalue = [],propertyvalueArr = [];
            property[key] = property[key]||generateUUID();
            for (let c in property) {
                propertykey.push(c);
                propertyvalue.push("?")
                propertyvalueArr.push(property[c])
            }
            propertykey = propertykey.join();
            propertyvalue = propertyvalue.join();
            await db.querySync(`INSERT INTO ${BusinessObject} (${propertykey}) VALUES (${propertyvalue}); `,propertyvalueArr);
            resolve(property[key])
        }
    })
}
module.exports = {save,saveModel,deleteMol,query,FormData,queryModels,businessMode,savebusinessMode,initdatabase}