module.exports = async (ctx,next) =>{
    const logon = ctx.isAuthenticated();
    if (!logon) {
        return ctx.body = {
            code: 401,
            msg: '用户未登录'
        }
    }
    await next();
}