const http = require('http');
const fs = require('fs');
const { constants } = require('buffer');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, Response) =>{
    Response.statusCode = 200;


    if (Request.url ==='/') {
        Response.setHeader('Content-Type', 'text/html');
        fs.readFile('./pages/index.html', (err,data)=>{
            Response.end(data);
        })
    
}
else if (Request.url === '/content') {
    Response.setHeader('Content-type', 'text/html');
    fs.readFile('./pages/contact.html', (err,data)=>{
        Response.end(data);
    })
}
else if (Request.url === '/about' || Request.url === '/about-us') {
    Response.setHeader('Content-Type', 'text/html');
    fs.readFile('./pages/about.html', (err,data)=>{
        Response.end(data);
    })
}
else {
    Response.setHeader('Content-Type', 'text/html');
    fs.readFile('/pages/error.html, (err,data')=>{
        Response.end(data)
    }
}
console.log(Request.url);
}).liaten(port, hostname, ()=>{
    console.log('server running at http://${hostname} :${port}'}
});