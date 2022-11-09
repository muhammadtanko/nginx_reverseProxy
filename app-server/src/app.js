const express = require("express");
const app = express();
let { PORT } = process.env;

if (!PORT) {
 PORT = 3000;
}


let serverId = generateId(8);
app.use((req,res, next)=>{
    res.setHeader("X-server", serverId);
    next();
});
app.use(express.static(__dirname +"/www"));

function generateId(len) {
    const store = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let id = "";
    for(let i = 0; i<len; i++){
        let pos = Math.ceil(Math.random()* store.length)
        id += store[pos];
    }
    return id;
}

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT} `);
});