const Router = require('koa-router')
const QueryData = require("../api/dbs/models/publicdata")
const router = new Router()
const mysql = require('mysql');
const config = require('../config/config.json');
// 配置数据库
const db = mysql.createConnection(config);

//查询数据集
router.post('/web_dataForm.action',async (ctx,next) => {
    let {postData} = ctx.request.body;
    postData = JSON.parse(postData)
    let evalscript = ctx.body=postData.pageData.script;
    const params = ctx.body=postData.params;
    for(let p in params){
        eval(`var ${p} = params[p]`);
    }
    try {
        evalscript = eval(evalscript);
    } catch (error) {
        
        ctx.body = {
            code: -1,
            message:"查询语句错误",
            data:{}
        };
    }
    
    let result = await QueryData.findSome(evalscript);
    ctx.body = {
        code: 0,
        message:"",
        data:{
            dataList:result,
            dataMeta:{}
        }
    };
    // ctx.body = {
    //     code: 0,
    //     msg: '登录成功',
    //     login: ctx.isAuthenticated()
    // }
})

//保存页面
router.post('/form_saveWebPage.action',async (ctx,next) => {
    return new Promise(async (resolve,reject)=>{
        let {form_json} = ctx.request.body;
        const formjson = JSON.parse(form_json);
        db.connect();
        const filters = [];
        filters.push(formjson.id);
        filters.push(formjson.name);
        filters.push(formjson.fileExt);
        filters.push(form_json);
        const data = await db.query(`select * from iplatform.iplatform_webpage where webpageid=?`,[formjson.id])
        resolve(data)
        // db.query(`INSERT INTO iplatform.iplatform_webpage (webpageid, name, type, pageJson)
        // VALUES (?, ?, ?, ?); `, filters,(err, data) => {
        //     if (err) return console.log(err.message);
        //     if (data.length === 0) return console.log('保存失败');

        //     const datasets = form_json.dataModel.datas;
        //     for (let d in datasets) {
        //         const dfilters = [];
        //         dfilters.push(datasets[d].id)
        //         dfilters.push(datasets[d].name)
        //         dfilters.push(datasets[d].script)
        //         dfilters.push(JSON.stringify(datasets[d].params))
        //         dfilters.push(formjson.id)
        //         db.query(`INSERT INTO iplatform.iplatform_dataset (id, name, script, params, webpageid)
        //         VALUES (?, ?, ?, ?, ?); `, dfilters,(err, data) => {
        //             if (err) return console.log(err.message);
        //             if (data.length === 0) return console.log('保存失败');
        //         }) 
        //     }
        //     const executes = form_json.executeModel?.executes;
        //     for (let d in executes) {
        //         const efilters = [];
        //         efilters.push(executes[d].id)
        //         efilters.push(executes[d].name)
        //         efilters.push(executes[d].script)
        //         efilters.push(JSON.stringify(executes[d].params))
        //         efilters.push(formjson.id)
        //         db.query(`INSERT INTO iplatform.iplatform_execute (id, name, script, params, webpageid)
        //         VALUES (?, ?, ?, ?, ?); `, efilters,(err, data) => {
        //             if (err) return console.log(err.message);
        //             if (data.length === 0) return console.log('保存失败');
        //         }) 
        //     }
        //     const pageModeJson = form_json.pageModeJson;
        //     for (let p in pageModeJson) {
                
        //     }
        // }) 
    })
})
module.exports = router