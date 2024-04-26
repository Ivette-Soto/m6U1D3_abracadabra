// 1.- Crear un servidor con Express en el puerto 3000.
const express = require('express')
const app = express()
    app.listen(3000, ()=>{
        console.log('Server, are we there yet?')
    });

// 2.- Definir la carpeta “assets” como carpeta pública del servidor.
    app.use(express.static("assets"));

// 3.- Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. 
//     ಥ_ಥ  🔦🔎📚💡   Hints at RESOURCE https://github.com/expressjs/express/blob/master/examples/params/index.js

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

// 4.- Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor.
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

// 5.- Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
    app.get("/abracadabra/conejo/:n", (req, res)=>{
        const userNumber = req.params.n
        const rabbitNumber = Math.floor(Math.random()*3)+1;
            if (rabbitNumber == userNumber){
                res.sendFile(__dirname + "/assets/conejito.jpg")
            } else {
                res.sendFile(__dirname + "/assets/voldemort.jpg")
            }
    });

// 6.- Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.
    app.get("*", (req, res)=>{
        res.send("<center><h1>This page does not exist...</h1></center>")
        });
