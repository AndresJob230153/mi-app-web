const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('¡Hola! Tu contenedor de Docker esta funcionando perfectamente.');
});

app.listen(port, () => {
 console.log('La aplicacion esta escuchando en el puerto ${port}');
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('¡Hola! Tu contenedor de Docker esta funcionando perfectamente.');
});

app.listen(port, () => {
 console.log('La aplicacion esta escuchando en el puerto ${port}');
});
