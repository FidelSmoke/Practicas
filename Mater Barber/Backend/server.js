const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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

app.post('/Registro'), (req, res) => {

    const nombreusuario = req.body.nombre_usuario
    const email = req.body.email
    const nit = req.body.nit
    const telefono = req.body.telefono
    const contraseña = req.body.contraseña
    const confirmarcontraseña = req.body.confirmarcontraseña

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {

        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        else if (result.length > 0) {
            return res.status(400).send("El usuario ya existe")
        }

        else if (contraseña !== confirmarcontraseña) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        else if (contraseña.length < 8) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres');
        }

        else {
            const q = "INSERT INTO usuarios (id_usuario, nombre_usuario, email, nit, telefono ,contraseña, id_rol) VALUES (U4,?,?,?,?,?,R3)"
            const values = [
                nombreusuario,
                email,
                nit,
                telefono,
                contraseña
            ]
            db.query(q, values, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                return res.status(200).send("Usuario creado con exito")
            })
        }
    })
};



app.listen(8081, () => {
    console.log("Conexion exitosa:)")
});


