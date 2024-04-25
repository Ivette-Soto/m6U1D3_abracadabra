// 1.-
const express = require('express')
const app = express()
    app.listen(3000, ()=>{
        console.log('Server, are we there yet?')
    });

// 2.- 
    app.use(express.static("assets"));

// 3.- ಥ_ಥ  
    const users = {
        "users": [
            "Juan",
            "Jocelyn",
            "Astrid",
            "Maria",
            "Ignacia",
            "Javier",
            "Brian"
            ]
        };

    app.get("/abracadabra/users", (req, res)=>{
        res.send(users)
        });       

    //rendered as 👉🏻 JSON 
// POSSIBLE STUDY RESOURCE https://github.com/expressjs/express/blob/master/examples/params/index.js

// 4.- /abracadabra/juego/:usuario 
        app.use("/abracadabra/game/:user", (req, res, next)=>{
            const userReq = req.params.user

            if (users.users.find(data => data == userReq)){
                next()
            } else {
                res.sendFile(__dirname + "/assets/who.jpeg")
            }
                
        });

        
    app.get("abracadabra/game/:user", (req, res)=>{
        res.sendFile(__dirname + "index.html")
    });

// 5.-
// 6.-
    app.get("*", (req, res)=>{
        res.send("<center><h1>This page does not exist...</h1></center>")
        })

// “”