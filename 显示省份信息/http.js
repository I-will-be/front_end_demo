const http=require("http");
const fs=require("fs");
const server=http.createServer();
server.on("request",(req,res)=>{
	//处理前端请求
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Headers","X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.setHeader("Content-Type","text/plain;charset=utf-8");
	let data=fs.readFileSync("./city.json");
	res.end(data);
});
server.listen(3000,function(){
	console.log("服务器启动成功");
});