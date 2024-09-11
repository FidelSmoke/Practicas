const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const moment = require('moment');

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

// Configuración de transporte de nodemailer para enviar correos electrónicos
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'cristianrueda0313@gmail.com',
        pass: 'ryke ekks cwbx rstg',
    }
});

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

app.post('/resetpass', (req, res) => {
    const email = req.body.email;

    function generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Buscar el usuario en la base de datos
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }

        if (results.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

        const user = results[0];
        const verificationCode = generateVerificationCode();
        const expirationDate = moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');

        db.query('UPDATE usuarios SET user_reset_code = ?, user_reset_code_expiration = ? WHERE id_usuario = ?', [verificationCode, expirationDate, user.id_usuario], (err) => {
            if (err) return res.status(500).json({ message: 'Error al guardar el código de verificación' + err });

            const mailOptions = {
                from: 'cristianrueda0313@gmail.com',
                to: email,
                subject: 'Código de verificación para restablecer contraseña || Master Barber',
                html: `
                <div class="Parrafos">
                    <p>El Código Para Restablecer Tu Contraseña Es: <b>${verificationCode}</b></p>
                    <p>El Código De Verificación Fue Enviado En La Fecha: <b>${expirationDate}</b></p>
                </div>
                `,
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    return res.status(500).json({ message: 'Error al enviar el correo electrónico' });
                }
                res.status(200).json({ message: 'Código de verificación enviado por correo electrónico' });
            });
        });
    });
});

app.post('/iventario', (req, res) => {

})



app.listen(8081, () => {
    console.log("Conexion exitosa:)")
});

{/* <p>El Código Para Restablecer Tu Contraseña Es: <b>${verificationCode}</b></p>   */}
{/* <p>El Código De Verificación Fue Enviado En La Fecha: <b>${expirationDate}</b></p> */}


