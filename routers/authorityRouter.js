const Router = require('koa-router')
const router = new Router()
const Authority = require("../api/dbs/models/authority")

router.get('/getRouters', async ctx => {
    const systemData = await Authority.QuerySystem(ctx.state.user);
    const systemMap = {};
    for (let i in systemData) {
        const moduleList = await Authority.QueryModule(systemData[i].systemCode);
        for (let j in moduleList) {
            const permissions = await Authority.QueryPermission(moduleList[j].id);
            for (let k in permissions) {
                const permissions2 = await Authority.QueryPermission(permissions[k].id);
                permissions[k].permissions = permissions2;
            }
            moduleList[j].permissions = permissions;
        }
        systemData[i].moduleList = moduleList;
        systemMap[systemData[i].systemCode] = systemData[i];
    }
    ctx.body = {
        code: 0,
        data: systemMap
    };
})


module.exports = router