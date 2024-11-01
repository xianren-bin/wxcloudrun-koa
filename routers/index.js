//require
const combineRouter = require('koa-combine-routers')

//测试示例路由
const a = require('./aRouter')
const b = require('./bRouter')

//数据库操作路由
const db = require('./dbquery')

//文件操作路由
const file = require('./fileRouter')

//路由表单路由
const action = require('./actionRouter')
const rest = require('./restRouter')

//权限路由
const authorityRouter = require('./authorityRouter')

//用户路由
const userModel = require('./userModel')


const Router = require('koa-router')
const router = new Router()

router.get('/index', async ctx => {
    // await ctx.render('../views/index.ejs',{title: 'hello world!公告'})
    await ctx.render('./index.html',{title: 'hello world!公告'})
})


module.exports = combineRouter(a,b,userModel,db,action,authorityRouter,router,rest,file);