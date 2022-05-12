
// Usando object express 
const express = require('express');
// App de express
const app = express();
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//path inicial, respomdera a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World!");
})

// Con esto inicializamos esta app
app.get('/launchx', (req, res) => {
    res.send('Bienvenido a launchX');
})

//Regresando un objeto 
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
})
// Query Params: Recibir parametros por la URL
// http://localhost:3000/explorers/carlo

//Query Params: Recibir parametros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName',(req, res) => {
    res.send(req.params);
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });