const Router = require('koa-router')
const router = new Router()

const multer = require('@koa/multer') // 引入
const fs = require('fs'); 
const path = require('path'); 

const filePath = path.resolve(__dirname, "../src/uploadfiles/"); 
//multer调用diskStorage方法可控制磁盘存储引擎
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filePath)//文件存储目录，注意必须存在该目录，否则报错
    },
    filename: function (req, file, cb) {
        const fileFormat = (file.originalname).split('.')
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])//定义文件名
    }
})
//multer是一个函数，需要执行一下
const upload = multer({ storage })

//上传多文件
router.post('/upload', upload.array('file'), async (ctx) => {
    const files = ctx.files.map((file, i) =>{
        file.path = "/r/"+file.originalname;
        file.destination = "/r/"+file.originalname;
        return file;
    })
    ctx.body = {
        code: 1,
        data: files
    }
})

//获取文件
router.get('/r/:id', async ctx => {
    let fileid = ctx.request.params.id;
    const filePath = path.join(__dirname, '../src/uploadfiles/'+fileid); // 替换为你的文件路径  
    const fileName = path.basename(filePath);  
    const contentType = 'image/jpeg'; // 根据你的文件类型设置MIME类型，如果是视频，则可能是'video/mp4'等  
    
    // 检查文件是否存在  
    if (!fs.existsSync(filePath)) {  
        ctx.status = 404;  
        ctx.body = 'File not found';  
        return;  
    }  
    
    // 设置响应头  
    ctx.set('Content-Type', contentType);  
    ctx.set('Content-Disposition', `attachment; filename="${fileName}"`); // 如果需要提示下载，可以这样设置  
    
    // 创建可读流  
    const stream = fs.createReadStream(filePath);  
    
    // 将文件流直接发送到客户端  
    ctx.body = stream;  
})


router.get('/vue/:id', async ctx => {
    let fileid = ctx.request.params.id;
    const filePath = path.join(__dirname, '../src/uploadfiles/'+fileid); // 替换为你的文件路径  
    const fileName = path.basename(filePath);  
    const contentType = 'text/javascript'; // 根据你的文件类型设置MIME类型，如果是视频，则可能是'video/mp4'等  
    
    // 检查文件是否存在  
    if (!fs.existsSync(filePath)) {  
        ctx.status = 404;  
        ctx.body = 'File not found';  
        return;  
    }  
    
    // 设置响应头  
    ctx.set('Content-Type', contentType);  
    ctx.set('Content-Disposition', `attachment; filename="${fileName}"`); // 如果需要提示下载，可以这样设置  
    
    // 创建可读流  
    const stream = fs.createReadStream(filePath);  
    
    // 将文件流直接发送到客户端  
    ctx.body = stream;  
})
//获取文件
router.get('/views/:id', async ctx => {
    let fileid = ctx.request.params.id;
    const filePath = path.join(__dirname, '../src/uploadfiles/'+fileid); // 替换为你的文件路径  
    const fileName = path.basename(filePath);  
    const contentType = 'text/javascript'; // 根据你的文件类型设置MIME类型，如果是视频，则可能是'video/mp4'等  
    
    // 检查文件是否存在  
    if (!fs.existsSync(filePath)) {  
        ctx.status = 404;  
        ctx.body = 'File not found';  
        return;  
    }  
    
    // 设置响应头  
    ctx.set('Content-Type', contentType);  
    ctx.set('Content-Disposition', `attachment; filename="${fileName}"`); // 如果需要提示下载，可以这样设置  
    
    // 创建可读流  
    const stream = fs.createReadStream(filePath);  
    
    // 将文件流直接发送到客户端  
    ctx.body = stream;  
})

//获取文件
router.get('/d/:id?', async ctx => {
    const fs = require('fs');
    const path = require('path');
    let fileid = ctx.request.params.id;
    const directoryPath = path.join(__dirname, '../src'+(fileid?"/"+fileid:"")); // 替换为你的文件路径  
    
    fs.readdir(directoryPath, (err, files) => {
        
        ctx.body = files;  
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        // 文件列表在files变量中
        files.forEach((file) => {
            console.log(file);
        });
    });
})

// //中转
// const { createProxyMiddleware } = require('http-proxy-middleware'); 
// const apiProxy = createProxyMiddleware({  
//     target: 'https://www.ximalaya.com', // 目标服务器的地址  
//     changeOrigin: true, // 如果需要跨域，设置为 true  
//     pathRewrite: { '^/tpi': '' }, // 重写请求路径，去掉 '/tpi' 前缀  
// });
// // 应用代理中间件到所有以 '/tpi' 开头的请求  
// router.get('/tpi', apiProxy, async (ctx) => {
//     console.log(ctx);
//     ctx.body = {
//         code: 1,
//         data: []
//     }
// })

module.exports = router