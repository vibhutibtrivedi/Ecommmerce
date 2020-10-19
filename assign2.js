var http=require('http');
var server=http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<p>Hello Frome Node Js</p>");
res.end();

});
server.listen(9000);
console.log("started on port no 9000");