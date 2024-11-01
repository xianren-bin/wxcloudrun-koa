const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken');  
const User = require("../../api/dbs/models/user")
const Crypt  = require('../../utils/crypt');
passport.use(new LocalStrategy({
    usernameField: 'USER_CODE',
    passwordField: 'PASSWORD'
},async (username,password,done)=> {
    // let where = {
    //     userName: username
    // };
    //在数据库中寻找输入的用户信息
    let result = await User.findOne(username);
    if (result != null) {
        if (Crypt.decrypt(password,result.PASSWORD)) {
            let user = {
                "IPLATFORM_NAME": "低代码平台",
                "IPLATFORMBPM_EXCEL_MODEL_IMPORT": "1",
                "PORTRAIT": null,
                "unableAddModel": "0",
                "IPLATFORM_DEVELOPMENT_CENTER": "/devIndex",
                "USER_NAME": result.USER_NAME,
                "rootOrgCode": result.rootOrg,
                "unableAddSystem": "0",
                "userCode": result.USER_CODE,
                "helpCenter": "https://open.yousucloud.com/p/IPLATFORM_HELP",
                "orgCode": result.ORG_CODE,
                "IPLATFORM_FRONT_RENDER_SHOW": "0",
                "IPLATFORM_DEVELOP_TOOL_LOGO": "/r/IPLATFORM/assets/image/cloudide.png",
                "isi": "",
                "ACCESS_TOKEN": "",
                "IPLATFORM_WEBFORM_BASE64": "0",
            }
            const ACCESS_TOKEN = jwt.sign({"userCode": result.USER_CODE,"USER_NAME": result.USER_NAME},  "x-could", { expiresIn: '1h' })// 加密userToken
            user.ACCESS_TOKEN = ACCESS_TOKEN;
            return done(null, user)
        } else {
            return done(null, false, '密码错误')
        }
    } else {
        return done(null, false, '用户不存在')
    }
}))
passport.serializeUser(function(user, done) {
    console.log('serializeUser: ', user)
    done(null, user)
})
passport.deserializeUser(function(user, done) {
    return done(null, user)
 })

module.exports = passport