const express = require("express")
require("dotenv").config();

const app = express()

const  port = process.env.PORT || 5000 ; 


app.get("/" , (req , res ) =>{
    res.send("Hello Aniket With Backend ");
})
app.get("/aniket" , (req , res ) =>{
    res.send("Hello Aniket  this is the /aniket route ");
})
app.get("/youtube" , (req , res ) =>{
    res.send(`<H1> This is the Youtube route <H1/>`);
})

app.listen(port  , () =>{
    console.log(`app is running on the ${port}`)
   
})