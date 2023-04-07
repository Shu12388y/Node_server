import http from "http"
import fs from "fs"
const Home_page=fs.readFileSync("./home.html","utf-8");
const About_page=fs.readFileSync("./about.html","utf-8");
const error_page=fs.readFileSync("./error.html","utf-8");
const  PORT=210;  
const server=http.createServer((req,res)=>{
    // assign dynamic port 
    // routing 
if(req.url==="/"){
 return res.end(Home_page)
}
else if(req.url==="/about"){
    return res.end(About_page)
}
else{
    return res.end(error_page);
}
});
server.listen(PORT,()=>{
console.log("hello server listening on port")
});
console.log("hello");