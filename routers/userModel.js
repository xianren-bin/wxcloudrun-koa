const Router = require('koa-router')
const Passport = require('../interface/utils/passport');
const Crypt  = require('../utils/crypt');
const User = require("../api/dbs/models/user")
const axios = require('axios');
const APP_URL = "https://api.weixin.qq.com/sns/jscode2session"
const router = new Router()

//注册用户
router.post('/register',async (ctx,next) => {

})

//initialzie()函数的作用是为上下文添加passport字段， 会在ctx挂载以下方法
//ctx.state.user 认证用户
//ctx.login(user) 登录用户
//ctx.logout() 用户退出登录
//ctx.isAuthenticated() 判断是否认证

const login = require('../middleware/login')
const loginJwt = require('../middleware/loginJwt')

//注册用户
router.post('/register',async (ctx,next) => {
    let {USER_CODE,PASSWORD} = ctx.request.body;

    PASSWORD = Crypt.encrypt(PASSWORD);
    ctx.body = {
        code: 0,
        data: ctx.state.user
    }
})

//忘记用户
router.post('/forgot',async (ctx,next) => {
    let {USER_CODE,PASSWORD} = ctx.request.body;
    PASSWORD = Crypt.encrypt(PASSWORD);
    const res = await User.upDate({PASSWORD},USER_CODE);
    ctx.body = res;
})


//微信用户登录
router.get('/wxsignin',async (ctx,next) => {
    const js_code = ctx.request.query.js_code;
    const ART_APP_ID = ctx.request.query.appid;
    const ART_APP_SECRET = ctx.request.query.secret;
    console.log(ctx.request.query); 
    try {
        const reponse = await axios.get(`${APP_URL}?appid=${ART_APP_ID}&secret=${ART_APP_SECRET}&js_code=${js_code}&grant_type=authorization_code`)
        ctx.body = reponse.data;
    } catch (error) {
        ctx.status = 500;  
        ctx.body = 'An error occurred while fetching the data.';  
        console.error(error); 
    }
})

//用户登录
router.post('/signin',async (ctx,next) => {
    // Passport 本地登录 这是固定用法
    return Passport.authenticate('local', function(err, user, info, status) {
        if (err) {
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {     
                //user是我们在数据库中找到的数据                           
                ctx.body = {
                    code: 0,
                    msg: '登录成功',
                    data: user
                }
                //可以存储用户的session
                return ctx.login(user)
            } else {
                ctx.body = {
                    code: -1,
                    //info是在验证里面判断后的信息，密码错误或者用户不存在
                    msg: info
                }
                console.log("登录失败");
            }
        }
    })(ctx, next)
})

//获取用户
router.post('/getUser',login,async (ctx,next) => {
    ctx.body = {
        code: 0,
        data: ctx.state.user
    }
})
//获取用户
router.get('/getUser',loginJwt,async (ctx,next) => {
    ctx.body = {
        code: 0,
        data: ctx.state.user
    }
})

//用户退出
router.post('/exit',async (ctx,next) => { 
    ctx.logout();
    if (!ctx.isAuthenticated()) {
        ctx.body = {
            code: 0,
            msg: '登出成功'
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '登出失败'
        }
    }
})
module.exports = router