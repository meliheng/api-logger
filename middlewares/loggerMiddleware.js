const fs = require('fs')
function loggerMiddleware(req,res,next) {
    var date= new Date().toLocaleString('en-US', { timeZone: 'UTC' });
    var req_url=req.get('Host')+req.originalUrl
    const log= `request url : ${req_url}, date : ${date} \n`
    writeTextFile(log)
    next()
}
function writeTextFile(content){
    fs.appendFile('log.txt',content,'utf-8',(err)=>{
        if(err) throw err
    })
}
module.exports = loggerMiddleware