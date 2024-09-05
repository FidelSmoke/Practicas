import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Registro() {

    const [user, setUser] = useState({
        nombre_usuario: "",
        email: "",
        nit: "",
        telefono: "",
        contraseña: "",
        confirmar_contraseña: ""

    });


    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8081/registrar", user);
            if (res.status === 200) {
                Swal.fire({
                    title: 'Cuenta creada',
                    text: 'Cuenta creada correctamente',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                Swal.fire({
                    title: error.response.data || 'Credenciales incorrectas',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            }
        }
    }
    return (
        <div className="Registro">
            <div className="min-vh-100 align-content-center mx-5 justify-content-end">
                <div className='container px-3 p-sm-5 border border-4 border-white border table-responsive border rounded-4 bg-dark.bg-gradient'>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-sm-6 bi-text-center mt-5">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1 className='text-white text-center anton mb-4'>¡Registrate Aqui!</h1>

                            <form className='row g-1' onSubmit={handleSubmit}>
                                <div className="text-center ">
                                    <button className="btn btn  mb-3 border border rounded-circle text-primary bg-white" type="button"> <i class="bi bi-google"></i> </button>
                                    <button className="btn btn  mb-3 mx-3 border border rounded-circle text-primary bg-white" type="button"><i className="bi bi-facebook"></i></button>
                                </div>
                                <label for="validationCustom01" className="texto form-label text-white" htmlFor="floatingInput" >Nombre de usuario</label>
                                <div className="input-group mb-3 ">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-person"></i></span>
                                    <input required type="text" className="form-control" name='nombre_usuario' placeholder="Introduce tu nombre de usuario" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Correo electronico</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-envelope"></i></span>
                                    <input required type="email" className="form-control" name='email' placeholder="Ej: pepitoperez@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Numero de identificacion</label>
                                <div className="input-group mb-3 ">
                                    <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                                    <input required type="text" className="form-control" name='nit' placeholder='Introduce tu numero de identificacion' aria-label="Amount (to the nearest dollar)" onChange={handleChange}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Telefono</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-telephone-plus"></i></span>
                                    <input required type="text" className="form-control" name='telefono' placeholder='Introduce tu numero de celular' aria-label="Amount (to the nearest dollar)" onChange={handleChange}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Contraseña</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input required type="password" className="form-control" name='contraseña' placeholder='Crea tu contraseña' aria-label="Amount (to the nearest dollar)" onChange={handleChange}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Confima tu contraseña</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input required type="password" className="form-control" name='confirmar_contraseña' placeholder='Confirma tu contraseña' aria-label="Amount (to the nearest dollar)" onChange={handleChange}
                                    />
                                </div>

                                <div class="col-12 col-sm-7 ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label text-white" for="invalidCheck">
                                            Acepta los terminos y condiciones
                                        </label>
                                        <div class="invalid-feedback">
                                            Debes aceptar antes de enviar
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-5 text-end '>
                                    <p className='text-white text-center'>¿Ya tienes cuenta? <br className='d-block d-sm-none'/><a className="link-offset-1 text-decoration-none" href="./login"> Inicia sesion</a></p>

                                </div>
                                <div className=' text-center mt-2'>
                                    <button type="submit" className="btn btn-outline-warning">Continuar</button>
                                </div>



                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // nombre_usuario, email, nit, telefono, contraseña, confirmar_contraseña
    )
}