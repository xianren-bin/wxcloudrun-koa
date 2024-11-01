const jsonwebtoken = require('jsonwebtoken');
const jwt = require('jsonwebtoken');  
const User = require("../api/dbs/models/user")
const util = require('util');
module.exports = async (ctx,next) =>{
    const logon = ctx.isAuthenticated();
    if (!logon) {
        let token = ctx.header.authorization;
        try {
            let payload = await util.promisify(jsonwebtoken.verify)(token.split(' ')[1], "x-could");
            
            let result = await User.findOne(payload.userCode);
            if (result != null) {
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
                return ctx.body = {
                    code: 200,
                    data: user,
                    msg: '请求成功'
                }
            }
            return ctx.body = {
                code: 401,
                msg: '未找到用户'
            }
        } catch (error) {
            return ctx.body = {
                code: 401,
                msg: "用户未登录"
            }
        }
    }
    await next();
}