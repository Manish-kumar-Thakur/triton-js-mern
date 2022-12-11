//this is server
const http = require("http");
const PORT = 4000;
const server = http.createServer((req,res)=>{
    res.write("hello manish this is your first node server platform");
    res.end();
});

server.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});
