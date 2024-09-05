const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json())

const corsOptions = {
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "master_barber"
})

app.post('/login', (req, res) => {

    const email = req.body.email
    const contraseña = req.body.password

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {

        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        else if (result.length > 0) {
            console.log(result[0])
            bcrypt.compare(contraseña, result[0].contrasena, (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send(err)
                }
                else if (result) {
                    return res.status(200).send("Inicio sesion correctamente")
                }
                else {
                    return res.status(400).send("Contraseña incorrecta")
                }
            })
        }
        else {
            return res.status(400).send("El usuario no existe")
        }
    })
})

app.post('/registrar', (req, res) => {

    const nombreusuario = req.body.nombre_usuario
    const email = req.body.email
    const nit = req.body.nit
    const telefono = req.body.telefono
    const contraseña = req.body.contraseña
    const confirmar_contraseña = req.body.confirmar_contraseña

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {

        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }

        else if (result.length > 0) {
            return res.status(400).send("El usuario ya existe")
        }

        else if (contraseña !== confirmar_contraseña) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        else if (contraseña.length < 8) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres');
        }
        else if (nit.length > 10) {
            return res.status(400).send('Tu numero de documento debe tener 10 caracteres');
        }
        else if (nit.length < 10) {
            return res.status(400).send('Tu numero de documento debe tener 10 caracteres');
        }

        else {
            const hashpassword = bcrypt.hashSync(contraseña, 10)
            const q = "INSERT INTO usuarios (nombre_usuario, email, nit, telefono ,contrasena, id_rol) VALUES (?,?,?,?,?,3)"
            const values = [
                nombreusuario,
                email,
                nit,
                telefono,
                hashpassword
            ]
            db.query(q, values, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                return res.status(200).send("Usuario creado con exito")
            })
        }
    })
});



app.listen(8081, () => {
    console.log("Conexion exitosa:)")
});


