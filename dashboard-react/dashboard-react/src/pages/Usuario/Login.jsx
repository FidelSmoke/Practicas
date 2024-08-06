import React from 'react'

export default function Login() {
    return (
       
        <div className="min-vh-100 p-5 align-content-center ">
            <div className='container p-5 w-50 border border- bg-white table-responsive border rounded '>
                <h1 className='text-danger text-center anton mb-4'>¡Ingresa Ya!</h1>
                <div class="input-group mb-3 ">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
                    <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2"><i class="bi bi-envelope"></i></span>
                    <input type="text" class="form-control" placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text"><i class="bi bi-file-lock"></i></span>
                    <input type="text" class="form-control" placeholder='Contraseña' aria-label="Amount (to the nearest dollar)" />
                </div>
                <div className=' text-center mt-4'>
                    <button type="button" class="btn btn-danger .col-md-4" data-bs-toggle="modal" data-bs-target="#AñadirModal" data-bs-whatever="@mdo" >Continuar</button>
                </div>
            </div>
        </div>
    )
}