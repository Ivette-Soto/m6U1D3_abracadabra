// 1.-
const express = require('express')
const app = express()
    app.listen(3000, ()=>{
        console.log('Are we there yet?')
    });

// 2.- 
    app.use(express.static("assets"));

// 3.- ಥ_ಥ
    // const users = [
    //     {userName: "Juan"},
    //     {userName: "Jocelyn"},
    //     {userName: "Astrid"},
    //     {userName: "Maria"},
    //     {userName: "Ignacia"},
    //     {userName: "Javier"},
    //     {userName: "Brian"}
    //      ];

    // app.get("/users", function(req, res){
    //     res.send(req, params, users),

    //      });

// 4.-
// 5.-
// 6.-
