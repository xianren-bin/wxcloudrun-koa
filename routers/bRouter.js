const Router = require('koa-router')
const router = new Router({
    prefix: "/api"
})
router.get('/apiB', async ctx => {
    ctx.body = 'bRouter';
})
router.get('/apiA', async ctx => {
    await ctx.render('../views/index.ejs',{title: 'hello world!公告'})
})
module.exports = router