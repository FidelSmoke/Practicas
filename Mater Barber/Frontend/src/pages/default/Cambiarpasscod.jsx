import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Cambiarpasscod() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nuevacontrasena: "",
        confirmarcontrasena:""
    });

    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8081/Cambiarpasscod", user);
            if (res.status === 200) {
                Swal.fire({
                    title: 'Contraseña Restablecida',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
                navigate("/Login");
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                Swal.fire({
                    title: error.response.data || 'Codigo Invalido',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                });
            }
        }
    };







    // Codigo Para Cuadros De Codigo De Verificacion
    const [otp, setOtp] = useState(new Array(6).fill(""))

    function Inputcode (e, index) {
        if (isNaN(e.target.value)) return false

        setOtp([...otp.map((data, i) => {
            if (i === index) {
                return e.target.value
            }
            return data
        })])

        if (e.target.value && index !== 5) {
            e.target.nextElementSibling.focus()
        }

    }
    return (
        <div className="resetpass">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div className="container p-5 w-50 border border-4 border-white table-responsive border rounded-4 bg-dark.bg-gradient">
                    <div className="row">
                        <div className="col col-lg-12 ">
                            <h1 className="text-center text-warning antonparabackend mb-4 ">Cambiar Contraseña</h1>
                        </div>
                        <form className='row g-1' onSubmit={handleSubmit}>
                            <div class="input-group mb-1 w-75 mx-auto ">
                                <span class="input-group-text bg-dark text-white"><i class="bi bi-lock"></i></span>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="password" onChange={handleChange} required />
                                    <label for="floatingInputGroup1" className='antonpararecuperar'>Nueva contraseña</label>
                                </div>
                            </div>
                            <div class="input-group mb-4 mt-2 w-75 mx-auto">
                                <span class="input-group-text bg-dark text-white"><i class="bi bi-lock"></i></span>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="password" onChange={handleChange} required />
                                    <label for="floatingInputGroup1" className='antonpararecuperar'>Confrimar contraseña</label>
                                </div>
                            </div>

                            <h3 className='text-center text-white antonparabackend fs-5 mt-3 mb-2'>Ingresa aqui el codigo que recisbiste por correo</h3>
                            <div className="otp-area">

                                {
                                    otp.map((data, i) => {
                                        return <input type='text' className='inputcod mx-3 mt-4 border-warning border rounded text-center bg-dark text-white bebas '
                                            placeholder='0'
                                            inputMode='numeric'
                                            required
                                            size={1}
                                            value={data}
                                            maxLength={1}
                                            onChange={(e) => Inputcode(e, i)} />
                                    }

                                    )
                                }
                            </div>

                            <div className=' text-center mt-5'>
                                <button type="submit" className="btn btn-outline-warning text-white border-2" >Verificar</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
// onClick = {() => alert(otp.join(""))
    )
}
