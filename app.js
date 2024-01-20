const express =require('express')
const app = express();
const port=3001;
app.get("/",(req,res)=>{
    res.send("WELCOME TO PRAN")
})

app.listen(port, ()=>{

    console.log(`Listening to the port ${port}`)
})