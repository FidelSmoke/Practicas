import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8081/login', { email, password });

            if (res.status === 200) {
                const token = res.data.token; // Extraer el token de la respuesta
                localStorage.setItem('token', token); // Guardar el token en localStorage

                Swal.fire({
                    title: 'Iniciaste sesión',
                    text: 'Has iniciado sesión correctamente',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });

                navigate('/IndexUser');
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                Swal.fire({
                    title: error.response.data.error || 'Credenciales incorrectas',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            } else if (error.request) {
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Ocurrió un error al procesar tu solicitud.',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            }
        }
    };

    return (
        <div className="login">
            <div className="min-vh-100 align-content-center mx-5 justify-content-end">
                <div className='container px-3 p-sm-5 w-50 border border-4 border-white table-responsive border rounded-4 bg-dark.bg-gradient '>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 bi-text-lg-center ">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <h1 className='text-white text-center anton mb-4'>¡Ingresa Ya!</h1>

                            <form className='row g-1' onSubmit={handleSubmit}>
                                <div className="text-center">
                                    <button className="btn btn  mb-3 border border rounded-circle text-primary bg-white" type="button"> <i className="bi bi-google"></i> </button>
                                    <button className="btn btn  mb-3 mx-3 border border rounded-circle text-primary bg-white" type="button"><i className="bi bi-facebook"></i></button>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-envelope"></i></span>
                                    <input required type="email" className="form-control" name='email' placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input required type="password" className="form-control" name='password' placeholder='Contraseña' aria-label="Amount (to the nearest dollar)"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className=' text-center'>
                                    <p><a href="./EnvEmail" className="link-underline-light text-decoration-none text-warning text-sm-center antonparabackend mt-5">¿Olvidaste tu contraseña?</a></p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-white text-center antonparabackend'>¿No tienes cuenta? <br className='d-none d-sm-none' /><a className="link-offset-1 text-decoration-none" href="./registro"> Registrate</a></p>

                                </div>
                                <div className=' text-center mt-4 mb-4 text-sm-center'>
                                    <button type="submit" className="btn btn-outline-warning antonparabackend">Continuar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
