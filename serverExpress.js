// 1.-
const express = require('express')
const app = express()
    app.listen(3000, ()=>{
        console.log('Server, are we there yet?')
    });

// 2.- 
    app.use(express.static("assets"));

// 3.- ಥ_ಥ     Hints at RESOURCE https://github.com/expressjs/express/blob/master/examples/params/index.js

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

// 4.- /abracadabra/juego/:usuario 
        app.use("/abracadabra/game/:user", (req, res, next)=>{
            const userReq = req.params.user

            if (users.users.find(data => data == userReq)){
                next()
            } else {
                res.sendFile(__dirname + "/assets/who.jpeg")
            }
                
        });

        
    app.get("/abracadabra/game/:user", (req, res)=>{
        res.sendFile(__dirname + "/index.html")
    });

// 5.-
    app.get("/abracadabra/conejo/:n", (req, res)=>{
        const userNumber = req.params.n
        const rabbitNumber = Math.floor(Math.random()*3)+1;

        if (rabbitNumber == userNumber){
            res.sendFile(__dirname + "/assets/conejito.jpg")
        } else {
            res.sendFile(__dirname + "/assets/voldemort.jpg")
        }
    });

// 6.-
    app.get("*", (req, res)=>{
        res.send("<center><h1>This page does not exist...</h1></center>")
        })