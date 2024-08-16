import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Registro() {

    const [nombre_usuario, setNombre_usuario] = useState('')
    const [email, setEmail] = useState('')
    const [nit, setNit] = useState('')
    const [telefono, setTelefono] = useState('')
    const [contraseña, setPassword] = useState('')
    const [confirmar_contraseña, setConfirmar_contraseña] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/registro", { nombre_usuario, email, nit, telefono, contraseña, confirmar_contraseña })
                .then(res => {
                    console.log(res)
                    if (res.data === "Registro Exitoso") {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Te Has Registrado correctamente",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/Login")
                    }
                    else {
                        Swal.fire("gay");
                    }
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="Registro">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div className='container p-5 w-46 border border-4 border-white border table-responsive border rounded-4 bg-dark.bg-gradient'>
                    <div className="row">
                        <div className="col-6 bi-text-center mt-5 pt-4">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <h1 className='text-white text-center anton mb-4'>¡Registrate Aqui!</h1>

                            <form className='row g-1' onSubmit={handleSubmit}>
                                <div className="text-center ">
                                    <button className="btn btn  mb-3 border border rounded-circle text-primary bg-white" type="button"> <i className="bi bi-google"></i> </button>
                                    <button className="btn btn  mb-3 mx-3 border border rounded-circle text-primary bg-white" type="button"><i className="bi bi-facebook"></i></button>
                                </div>
                                <label for="validationCustom01" className="texto form-label text-white" htmlFor="floatingInput" >Nombre de usuario</label>
                                <div className="input-group mb-3 ">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-person"></i></span>
                                    <input type="text" className="form-control" name='nombre_usuario' placeholder="Introduce tu nombre de usuario" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={e => setNombre_usuario(e.target.value)}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Correo electronico</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-envelope"></i></span>
                                    <input type="email" className="form-control" name='email' placeholder="Ej: pepitoperez@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Numero de identificacion</label>
                                <div className="input-group mb-3 ">
                                    <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                                    <input type="text" className="form-control" name='nit' placeholder='Introduce tu numero de identificacion' aria-label="Amount (to the nearest dollar)" onChange={e => setNit(e.target.value)}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Telefono</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-telephone-plus"></i></span>
                                    <input type="text" className="form-control" name='telefono' placeholder='Introduce tu numero de celular' aria-label="Amount (to the nearest dollar)" onChange={e => setTelefono(e.target.value)}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Contraseña</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input type="password" className="form-control" name='contraseña' placeholder='Crea tu contraseña' aria-label="Amount (to the nearest dollar)" onChange={e => setPassword(e.target.value)}
                                    />
                                </div>

                                <label for="validationCustom01" className="texto form-label text-white">Confima tu contraseña</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-file-lock"></i></span>
                                    <input type="password" className="form-control" name='confirmar_contraseña' placeholder='Confirma tu contraseña' aria-label="Amount (to the nearest dollar)" onChange={e => setConfirmar_contraseña(e.target.value)}
                                    />
                                </div> *

                                <div class="col-12">
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