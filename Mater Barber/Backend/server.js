const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');

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
        if(err) return res.send("Error");
        if(data.length > 0) {
            return res.send ("Login Succesfully")
        }else{
            return res.send ("No record")
        }
    })
})

app.listen(8081, () => {
    console.log("Hola")
})
