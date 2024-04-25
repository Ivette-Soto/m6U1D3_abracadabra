// 1.-
const express = require('express')
const app = express()
    app.listen(3000, ()=>{
        console.log('Are we there yet?')
    });

// 2.- 
    app.use(express.static("assets"));

// 3.- ಥ_ಥ  /abracadabra/usuarios.
    // const users = [
    //     {userName: "Juan"},
    //     {userName: "Jocelyn"},
    //     {userName: "Astrid"},
    //     {userName: "Maria"},
    //     {userName: "Ignacia"},
    //     {userName: "Javier"},
    //     {userName: "Brian"}
    //     ];

    // app.get("/users", function(req, res){
    //     res.send("users" , (req.user.userName);
    //     render 👉🏻 JSON 
    //     });
// POSSIBLE STUDY RESOURCE https://github.com/expressjs/express/blob/master/examples/params/index.js

// 4.- /abracadabra/juego/:usuario 
// 5.-
// 6.-
    app.get("*", (req, res)=>{
        res.send("<center><h1>This page does not exist...</h1></center>")
        })

// “”