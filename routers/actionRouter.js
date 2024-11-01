const Router = require('koa-router')
const datasetAction = require("../api/dbs/models/dataset")
const executeAction = require("../api/dbs/models/execute")
const webpageAction = require("../api/dbs/models/webpage")
const pageAction = require('../api/dbs/models/page');
const businesses = require("../api/dbs/models/businesses")
const Authority = require("../api/dbs/models/authority")
const router = new Router()


//查询数据大屏页面列表
router.post('/web_queryScreenPages.action',async (ctx,next) => {
    let {systemCode} = ctx.request.body;
    const res = await webpageAction.queryWebPages(".s",systemCode);
    ctx.body = {
        code: 0,
        data: res,
        message: ""
    };
})
//查询功能表单页面列表
router.post('/web_queryFormPages.action',async (ctx,next) => {
    let {systemCode} = ctx.request.body;
    const res = await webpageAction.queryWebPages(".p",systemCode);
    ctx.body = {
        code: 0,
        data: res,
        message: ""
    };
})

//查询功能页面
router.post('/web_queryWebPage.action',async (ctx,next) => {
    let {form_id} = ctx.request.body;
    const res = await webpageAction.query(form_id);
    ctx.body = res;
})

//保存功能页面
router.post('/web_saveWebPage.action',async (ctx,next) => {
    let {form_json,newflag} = ctx.request.body;
    const formjson = JSON.parse(form_json);
    let res;
    if (newflag === "true") {
        res = await webpageAction.add(formjson);
    } else {
        res = await webpageAction.save(formjson);
    }
    ctx.body = res;
})
//保存页面
router.post('/web_savePage.action',async (ctx,next) => {
    let {page_json} = ctx.request.body;
    const pagejson = JSON.parse(page_json);
    const res = await webpageAction.savePage(pagejson);
    ctx.body = res;
})

//查询页面
router.post('/web_queryPage.action',async (ctx,next) => {
    let {pageid,form_id,page} = ctx.request.body;
    const res = await pageAction.query(pageid,form_id,page);
    ctx.body = {
        code: 0,
        data: res,
        message: ""
    };
})




//查询数据集数据
router.post('/web_data.action',async (ctx,next) => {
    let {postData} = ctx.request.body;
    const res = await datasetAction.FormData(JSON.parse(postData),ctx.state.user)
    ctx.body = res;
})
//查询数据集数据
router.post('/query_dataSet.action',async (ctx,next) => {
    let {postData} = ctx.request.body;
    const res = await datasetAction.FormData(JSON.parse(postData))
    ctx.body = res;
})

//保存数据集配置
router.post('/web_datasetSave.action',async (ctx,next) => {
    let {dataset} = ctx.request.body;
    const datasets = JSON.parse(dataset);
    const res = await datasetAction.save(datasets);
    ctx.body = res;
})
//删除数据集配置
router.post('/web_dataset_delete.action',async (ctx,next) => {
    let {datasetid} = ctx.request.body;
    const res = await datasetAction.delete(datasetid);
    ctx.body = res;
})



//执行业务逻辑
router.post('/web_execute.action',async (ctx,next) => {
    let {postData} = ctx.request.body;
    const res = await executeAction.FormData(JSON.parse(postData),ctx.state.user)
    ctx.body = res;
})
//执行业务逻辑
router.post('/api/:webformid/:executeid',async (ctx,next) => {
    const webformid = ctx.request.params.webformid,executeid = ctx.request.params.executeid;
    let postData = ctx.request.body;
    postData = JSON.parse(JSON.stringify(postData));
    postData.iplatform_web_form_id = webformid;
    postData.iplatform_web_form_execute = executeid;
    const res = await executeAction.FormData(postData)
    ctx.body = res;
})
//执行业务逻辑
router.get('/api/:webformid/:executeid',async (ctx,next) => {
    const webformid = ctx.request.params.webformid,executeid = ctx.request.params.executeid;
    let postData = ctx.request.body;
    postData = JSON.parse(JSON.stringify(postData));
    postData.iplatform_web_form_id = webformid;
    postData.iplatform_web_form_execute = executeid;
    const res = await executeAction.FormData(postData)
    ctx.body = res;
})

//查询数据集配置
router.post('/query_execute.action',async (ctx,next) => {
    let {postData} = ctx.request.body;
    const res = await executeAction.FormData(JSON.parse(postData))
    ctx.body = res;
})
//保存业务逻辑配置
router.post('/web_executeSave.action',async (ctx,next) => {
    let {execute} = ctx.request.body;
    const executes = JSON.parse(execute);
    const res = await executeAction.save(executes);
    ctx.body = res;
})
//删除业务逻辑配置
router.post('/web_execute_delete.action',async (ctx,next) => {
    let {executeid} = ctx.request.body;
    const res = await executeAction.delete(executeid);
    ctx.body = res;
})


//查询业务模型列表
router.post('/queryModels.action',async (ctx,next) => {
    let name = ctx.request.query.code;
    console.log(ctx.request.query);
    const res = await businesses.queryModels(name);
    ctx.body = res;
})
//查询业务模型
router.post('/model_getSystem.action',async (ctx,next) => {
    let systemCode = ctx.request.query.code;
    console.log(ctx.request.query);
    const res = await businesses.businessMode(systemCode);
    ctx.body = res;
})
//保存业务模型
router.post('/model_saveBusinesses.action',async (ctx,next) => {
    let jsonDataSync = ctx.request.body.jsonDataSync;
    const res = await businesses.savebusinessMode(jsonDataSync,ctx.state.user);
    ctx.body = res;
})

//保存应用信息
router.post('/web_savaSystem.action',async (ctx,next) => {
    let system = ctx.request.body;
    const res = await Authority.savaSystem(system,ctx.state.user);
    ctx.body = res;
})

//保存菜单模块信息
router.post('/web_savaModule.action',async (ctx,next) => {
    let moduleObj = ctx.request.body;
    if (moduleObj.menutype == "menu") {
        const formjson = {
            "id": moduleObj.id,
            "name": moduleObj.name,
            "system": moduleObj.SYSTEM_CODE,
            "fileExt": "."+moduleObj.type,
        }
        await webpageAction.add(formjson);
    }
    const res = await Authority.savaModule(moduleObj,ctx.state.user);
    ctx.body = res;
})
//保存菜单模块信息
router.post('/web_savaMenu.action',async (ctx,next) => {
    let moduleObj = ctx.request.body;
    if (moduleObj.menutype == "menu") {
        const formjson = {
            "id": moduleObj.id,
            "name": moduleObj.name,
            "system": moduleObj.SYSTEM_CODE,
            "fileExt": "."+moduleObj.type,
        }
        await webpageAction.add(formjson,ctx.state.user);
    } 
    const res = await Authority.savaPermission(moduleObj,ctx.state.user);
    ctx.body = res;
})

module.exports = router