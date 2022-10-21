const express = require("express");
const auth = require("./routes/auth");
const app = express();

app.use(express.json());

app.use("/auth", auth)
app.get("/", (req,res) =>{
    res.send('hello Micle')
})

app.listen(5001,()=>{
    console.log("express working")
});