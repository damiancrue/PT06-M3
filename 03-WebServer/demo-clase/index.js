const fs= require('fs');
const http=require('http')
http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        const html = fs.readFileSync(__dirname+'/html/index.html','utf-8');
        res.end(html)
    } else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        const html2 = fs.readFileSync(__dirname+'/html/404.html','utf-8');
        res.end(html2)
    }
})
.listen(8080);