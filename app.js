//require
const Koa = require("koa");

//实例化app
const app = new Koa();

//解决跨域请求和options请求
const cors = require('koa2-cors'); //跨域处理
app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            return '*'; // 允许来自所有域名请求
            if (ctx.url === '/test') {
                return '*'; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds() //秒 
    };
    if (/(y+)/.test(fmt)){ //根据y的长度来截取年
  fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
}

//入参解析
const bodyParser = require("koa-bodyparser");
app.use(bodyParser({
    jsonLimit: '10mb',
    formLimit: '10mb'
  }));

// session的加密处理
// const session = require('koa-generic-session')
const session = require('koa-session')
const RedisStore = require("koa-redis");
app.keys = ['xcloud', 'keyskeys']
app.use(session({
    key: "xcloud",
    prefix: "xcloud:uid",
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000  // 单位 ms
    },
    maxAge: 86400000,  /**  cookie的过期时间 */
    overwrite: true, /** 默认 可以重写过期时间 */
    httpOnly: true, /**  true表示只有服务器端可以获取 cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） */
    renew: false, /** 当用户进行浏览器操作时刷新 cookie 过期时间 */
    store: new RedisStore({all: '127.55.92.78:6379'})
}, app))

const passport = require("./interface/utils/passport");
app.use(passport.initialize())
//开启koa-passport对session的支持，passport.session()是使passport能够从session中提取用户信息
app.use(passport.session())


// 错误处理中间件, 洋葱最外层
app.use(async (ctx, next)=>{
    try {
        await next();
    } catch (error) {
        // 响应用户
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = error.message;
        ctx.app.emit('error', error); // 触发应用层级错误事件
    }
});

app.use(async (ctx, next)=>{
    // console.log("前置操作");
    await next();
    // console.log("后置操作");
});

// 全局错误事件监听
app.on('error', (error)=>{
    console.error(error);
});

/* view处理 */
const views = require("koa-views");
app.use(views('./views',{
    extension:'html'
}))

//文件路径配置
const source = require("koa-static");
app.use(source('./views'))

//路由前置中间件
const routerMid = require('./middleware/router')
app.use(routerMid);
// 使用自定义中间件来处理路由回退
app.use(async (ctx, next) => {
    await next();
  
    // 如果响应已经设置（即找到了匹配的路由），则不执行回退
    if (ctx.response.status === 404 && ctx.response.body === undefined) {
    //   ctx.body = await serveFile(ctx, 'index.html');
      await ctx.render('./index.html',{title: 'hello world!公告'})
    }
});
// 创建服务静态文件的辅助函数
const path = require('path');
async function serveFile(ctx, filePath) {
    filePath = path.join(__dirname, 'src', filePath);
    ctx.throw(404, filePath);
    try {
      const data = await fs.promises.readFile(filePath, 'utf-8');
      ctx.type = path.extname(filePath).slice(1);
      ctx.body = data;
    } catch (err) {
      ctx.throw(404, 'File not found');
    }
}
//挂载路由
const router = require('./routers/index');
app.use(router());

//监听8888端口
app.listen(8888,()=>{
	console.log([
    "                   _ooOoo_",
    "                  o8888888o",
    "                  88\" . \"88",
    "                  (| -_- |)",
    "                  O\\  =  /O",
    "               ____/`---'\\____",
    "             .'  \\\\|     |//  `.",
    "            /  \\\\|||  :  |||//  \\",
    "           /  _||||| -:- |||||-  \\",
    "           |   | \\\\\\  -  /// |   |",
    "           | \\_|  ''\\---/''  |   |",
    "           \\  .-\\__  `-`  ___/-. /",
    "         ___`. .'  /--.--\\  `. . __",
    "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
    "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
    "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
    "======`-.____`-.___\\_____/___.-`____.-'======",
    "                   `=---='",
    "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
    "         佛祖保佑       永无BUG"
].join('\n'));
    console.info("服务启动!")
});
