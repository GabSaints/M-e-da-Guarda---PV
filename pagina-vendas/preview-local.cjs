const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  let requestPath;
  try {requestPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
  const relative=requestPath==='/'?'index.html':requestPath.replace(/^\//,'');
  const allowed=['index.html','amostra.html','styles.css','config.js','page.js','assets/hero-mae-filho.jpg','assets/patio-escola.jpg','marketing.js','termos.html','privacidade.html','reembolso.html'];
  if(!allowed.includes(relative)){res.writeHead(404);res.end('Não encontrado');return;}
  fs.readFile(path.join(root,relative),(error,data)=>{
    if(error){res.writeHead(404);res.end('Não encontrado');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(relative)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);
  });
}).listen(4184,'127.0.0.1',()=>console.log('Prévia local: http://localhost:4184/'));
