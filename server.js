const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./conexion'); 

const infoplantas = require('./routes/tabla_infoplantas');
const infoplantas2 = require('./routes/tabla_infoplantas2');
const plantas = require('./routes/tabla_plantas');
const usuarios = require('./routes/tabla_usuarios');

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: ['http://localhost:5173'],  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions)); 


app.options('*', cors(corsOptions));


app.use('/infoplantas', infoplantas);
app.use('/infoplantas2', infoplantas2);
app.use('/plantas', plantas);
app.use('/usuarios', usuarios);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
