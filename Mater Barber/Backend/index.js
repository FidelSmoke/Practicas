const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'master_barber',
    connectTimeout: 10000,
});


app.post('/usuarios', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).send('ingresar email y contraseña');
    }

    db.query('SELECT * FROM usuarios WHERE user_email = fideljoseespi10@gmail.com', [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }

        if (results.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

  
    });
});

app.get('/', (req, res) => {
    res.send('Como Es');
});

app.listen(port, () => {
    console.log(`el servidor se esta ejecutando en el puerto ${port}`);
});