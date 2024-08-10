const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');

const app = express();
app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "master_barber"
})

app.post('/usuarios', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.contraseña], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0) {
            return res.json("Login Succesfully")
        }else{
            return res.json("No record")
        }
    })
})

app.listen(8081, () => {
    console.log("Listening...")
})
