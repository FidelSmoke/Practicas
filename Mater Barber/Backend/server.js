const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
            return res.status(400).send("El usuario no existe , por favor registrese")
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




app.post('/EnvEmail', (req, res) => {
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
                subject: 'Código De Verificación Para Restablecer Tu Contraseña',
                html: `
                <div class="container" style="background-color: #212529; color: #fff; padding: 80px;">
                    <div style="text-align: center;">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipNNaFwUx_VedoGhL9IvGzv7J-L4D5Fgp4lAdLZ1=s680-w680-h510" alt=""
                        style="width: 20%; height: 20%;">
                    </div>
                    <h1 style="color:#e9c706; text-align: center; font-weight: bold; font-size: 40px;">Recuperación De Contraseña</h1>
                    <p style="font-size: 20px; text-align: center;">Tu Cod      igo Para Restalecer La Contraseña Es</p>
                    <h2 style="font-size: 50px; font-weight: bolder; color: #ff2f2f ; text-align: center;">${verificationCode}</h2>
                    <h3 ">El Código De Verificación Fue Enviado A Las: <b>${expirationDate}</b></h3>
                    <h3">Este Código Caducará En 1 Hora.</h3>
                    <h3>Gracias Por Confiar En Master Barber</h2>
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



app.get('/inventario', (req, res) => {
    db.query(`
        SELECT 
            id_producto, 
            nombre, 
            descripcion_P, 
            cantidad, 
            id_categoria_producto, 
            PrecioUnitario 
        FROM inventario
    `, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error en el servidor');
        } else {
            return res.status(200).send(results);
        }
    });
});

app.post('/inventario', (req, res) => {
    const q = "INSERT INTO inventario (id_producto, nombre, descripcion_P, cantidad, id_categoria_producto, PrecioUnitario) VALUES (?)"

    const values = [
        req.body.producto,
        req.body.nombre,
        req.body.descripcion,
        req.body.cantidad,
        req.body.categoria,
        req.body.precio
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("se ha creado correctamente")

    })
})




app.post('/Cambiarpasscod', (req, res) => {
    const verificaCode = req.body.verificaCode;
    const newContrasena = req.body.newcontrasena
    const confirmContra= req.body.confirmcontra
    const fecha = moment().format('YYYY-MM-DD HH:mm:ss');

    db.query('SELECT * FROM usuarios WHERE user_reset_code = ? AND user_reset_code_expiration > ?', [verificaCode, fecha], (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }

        else if (newContrasena !== confirmContra) {
            return res.status(400).send('Las contraseñas no coinciden');
        }

        else if (newContrasena.length < 8) {
            return res.status(400).send('La contraseña debe tener al menos 8 caracteres');
        }

        else if (results.length === 0) {
            return res.status(400).send('Código de verificación invalido o expirado');
        }

        const user = results[0];
        const hashPassword = bcrypt.hashSync(newContrasena, 10)

        db.query('UPDATE usuarios SET contrasena = ?, user_reset_code = NULL, user_reset_code_expiration = NULL WHERE id_usuario = ?', [hashPassword, user.id_usuario   ], (err) => {
            if (err) return res.status(500).send('Error al actualizar la contraseña');
            res.status(200).send('Contraseña restablecida con éxito');
        });
    });

});

app.listen(8081, () => {
    console.log("Conexion exitosa:)")
});

// style="width: 20%; height: 20%;">


