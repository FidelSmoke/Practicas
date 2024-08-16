const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "master_barber"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND contraseña = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.send("Error");
        if (data.length > 0) {
            return res.send("Inicio sesion correctamente")
        } else {
            return res.send("No Registrado")
        }
    })
});





app.post('/Registro', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ?";

    db.query(sql, [req.body.nombre_usuario,req.body.email, req.body.nit, req.body.telefono, req.body.password,req.body.confirmar_contraseña, req.body.id_rol], (err, data) => {

        if (err) {
            return res.status(500).send(err)
        }

        else if (result.length > 0) {
            return res.status(400).send("Usuario Existente Intenta Iniciar Sesion")
        }

        else if (password !== confirmPassword) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        else if (password.length < 8) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres');
        }

        else if (telefono !== telefono_usuario) {
            return res.status(400).send('Este Numero Telefonico Ya Se Encuentra Registrado');
        }

        if (data.length > 0) {
            return res.status(500).send("Registrado correctamente");
        }
        
    })
})



app.listen(8081, () => {
    console.log("Conexion exitosa:)")
});


