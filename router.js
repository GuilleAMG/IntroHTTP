//const http = require('http')

let objeto = {
    "user":"gmunguia",
    "password":"12345"
}

function index(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de Inicio.');
}

function empleado(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(objeto));
}

function info(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Sitio desarrollado por GAMG.');
}

function defo(req, res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('Pagina no disponible.');
}

module.exports={
    index,
    empleado,
    info,
    defo
}