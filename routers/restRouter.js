const Router = require('koa-router')
const dictionaries = require("../api/dbs/models/dictionaries")
const identification = require("../api/dbs/models/identification")
const businesses = require("../api/dbs/models/businesses")
const router = new Router({
    prefix: "/rest"
})
router.get('/query/:id/identification', async ctx => {
    let systemCode = ctx.request.params.id;
    const res = await identification.FormData(systemCode);
    ctx.body = res;
})
router.get('/query/:id/dictionaries', async ctx => {
    let systemCode = ctx.request.params.id;
    const res = await dictionaries.FormData(systemCode);
    ctx.body = res;
})
router.get('/query/:id/businesses', async ctx => {
    let systemCode = ctx.request.params.id;
    const res = await businesses.FormData(systemCode);
    ctx.body = res;
})

module.exports = router