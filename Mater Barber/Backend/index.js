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

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'master_barber',
    connectTimeout: 10000,
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        res.send(results);
    });
});

app.post('/usuarios', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).send('Por favor, ingrese email y contraseña');
    }

    // Buscar el usuario en la base de datos
    db.query('SELECT * FROM usuarios WHERE user_email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }

        if (results.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

        const user = results[0];

        // Comparar la contraseña
        if (user.user_pass === password) {
            return res.send(`Inicio de sesión exitoso. Bienvenido, ${user.user_nom} ${user.user_apels}`);
        } else {
            // El usuario y la contraseña no coinciden
            return res.status(400).send('Contraseña incorrecta');
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`el servidor se esta ejecutando en el puerto ${port}`);
});