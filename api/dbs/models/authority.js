const db = require('../config/dbconfig');
const {
    generateUUID
} = require('../../../utils/method');
const Authority = {
    QuerySystem: async (user) => {
        return new Promise((resolve,reject)=>{
            let sql = `select SYSTEM_CODE systemCode,SYSTEM_NAME systemName,SYSTEM_IMG systemIcon from iplatform.system_info where IS_VALID=1 `;
            if (user.userCode != "xsuper") { //权限过滤
                sql += ` and CREATOR="${user.userCode}"`;
            }
            sql += ` order by ORDER_NUM`;
            db.query(sql, (err, data) => {
                if (err) return resolve([]);
                resolve(data);
            }) 
        })
    },
    savaSystem: async (system,user) => {
        return new Promise((resolve,reject)=>{
            const dfilters = [];
            dfilters.push(system.SYSTEM_CODE);
            dfilters.push(system.SYSTEM_NAME);
            dfilters.push(system.modelCode);
            dfilters.push(system.SYSTEM_IMG);
            dfilters.push(system.SYSTEM_VERSION);
            dfilters.push(system.ORDER_NUM);
            dfilters.push(system.REMARK);
            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.userCode);
            dfilters.push(user.orgCode);
            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.rootOrgCode);
            db.query(`INSERT INTO iplatform.system_info (SYSTEM_CODE, SYSTEM_NAME, modelCode, SYSTEM_IMG, SYSTEM_VERSION,ORDER_NUM,REMARK, CREATE_TIME,CREATOR,CREATOR_ORG,LAST_UPDATE_TIME,rootOrg)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?); `, dfilters,(err, data) => {
                if (err) return console.log(err.message);
                resolve({
                    code: 0,
                    message: "保存成功"
                })
            }) 
        })
    },
    QueryModule: async (systemCode) => {
        return new Promise((resolve,reject)=>{
            let sql = `select MODULE_CODE id,MODULE_URL moduleUrl,MODULE_NAME moduleName,MODULE_ICON moduleIcon,SYSTEM_CODE from iplatform.system_module where IS_VALID=1 `;
            if (systemCode) { //权限过滤
                sql += ` and SYSTEM_CODE="${systemCode}"`;
            }
            sql += ` order by ORDER_NUM`;
            db.query(sql, (err, data) => {
                if (err) return resolve([]);
                resolve(data);
            }) 
        })
    },
    savaModule: async (module,user) => {
        return new Promise((resolve,reject)=>{
            const dfilters = [];
            const uuid = generateUUID();
            dfilters.push(uuid)
            dfilters.push(module.SYSTEM_CODE);
            dfilters.push(module.MODULE_NAME);
            dfilters.push(module.MODULE_ICON);
            dfilters.push(module.MODULE_URL);
            dfilters.push(module.ORDER_NUM);
            dfilters.push(module.REMARK);

            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.userCode);
            dfilters.push(user.orgCode);
            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.rootOrgCode);
            db.query(`INSERT INTO iplatform.system_module (MODULE_CODE, SYSTEM_CODE, MODULE_NAME, MODULE_ICON, MODULE_URL,ORDER_NUM,REMARK, CREATE_TIME,CREATOR,CREATOR_ORG,LAST_UPDATE_TIME,rootOrg)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?); `, dfilters,(err, data) => {
                if (err) return console.log(err.message);
                resolve({
                    code: 0,
                    message: "保存成功"
                })
            }) 
        })
    },
    QueryPermission: async (id) => {
        return new Promise((resolve,reject)=>{
            let sql = `select PERMISSION_ID id,PERMISSION_URL permissionUrl,PERMISSION_NAME permissionName,OPEN_TYPE openType,PERMISSION_TYPE permissionType from iplatform.permission where IS_VALID=1 `;
            if (id) { //权限过滤
                sql += ` and (MODULE_CODE = "${id}" or PARENT_PERMISSION_ID = "${id}")`;
            }
            sql += ` order by ORDER_NUM`;
            db.query(sql, (err, data) => {
                if (err) return resolve([]);
                resolve(data);
            }) 
        })
    },
    savaPermission: async (Permission,user) => {
        return new Promise((resolve,reject)=>{
            const dfilters = [];
            const uuid = generateUUID();
            dfilters.push(uuid)
            dfilters.push(Permission.name);
            dfilters.push(Permission.icon);
            dfilters.push(Permission.id);
            dfilters.push(Permission.type);
            dfilters.push(Permission.menutype);
            dfilters.push(Permission.openType);
            dfilters.push(Permission.ordernum||null);

            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.userCode);
            dfilters.push(user.orgCode);
            dfilters.push(new Date().Format("yyyy-MM-dd hh:mm:ss"));
            dfilters.push(user.rootOrgCode);

            let parentCode = "PARENT_PERMISSION_ID";
            if (Permission.parentPermissionId) {
                dfilters.push(Permission.parentPermissionId)
            } else {
                parentCode = "MODULE_CODE";
                dfilters.push(Permission.moduleCode)
            }
            db.query(`INSERT INTO iplatform.permission (PERMISSION_ID, PERMISSION_NAME, PERMISSION_ICON, PERMISSION_URL,PERMISSION_TYPE,MENU_TYPE,OPEN_TYPE, ORDER_NUM, CREATE_TIME,CREATEOR,CREATOR_ORG,LAST_UPDATE_TIME,rootOrg,${parentCode})
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?); `, dfilters,(err, data) => {
                if (err) return console.log(err.message);
                resolve({
                    code: 0,
                    message: "保存成功"
                })
            }) 
        })
    }
}

module.exports = Authority