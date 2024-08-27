import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post("http://localhost:8081/login", { email, password })
                .then(res => {
                    console.log(res)
                    if (res.data === "Inicio sesion correctamente") {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Has ingresado correctamente",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    }
                    else {
                        Swal.fire("Error ", "Correo electronico o contraseña incorrectas!", "error");
                    }
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="login">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div className='container p-5 w-50 border border-4 border-white table-responsive border rounded-4 bg-dark.bg-gradient '>
                    <div className="row">
                        <div className="col-6">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <h1 className='text-white text-center anton mb-4'>¡Ingresa Ya!</h1>

                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className="text-center">
                                    <button className="btn btn  mb-3 border border rounded-circle text-primary bg-white" type="button"> <i className="bi bi-google"></i> </button>
                                    <button className="btn btn  mb-3 mx-3 border border rounded-circle text-primary bg-white" type="button"><i className="bi bi-facebook"></i></button>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-envelope"></i></span>
                                    <input type="email" className="form-control" name='email' placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input type="password" className="form-control" name='password' placeholder='Contraseña' aria-label="Amount (to the nearest dollar)"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <p><a href="#" className="link-underline-light text-decoration-none text-warning">¿Olvidaste tu contraseña?</a></p>
                                <div className=' text-center mt-4'>
                                    <button type="submit" className="btn btn-outline-warning">Continuar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}