import React from 'react'

export default function Login() {
    return (
<<<<<<< HEAD
        <div class="login">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end ">
                <div className='container p-5 w-50 border border- bg-white table-responsive border rounded '>
                    <div className="row">
                        <div className="col-6">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <h1 className='text-danger text-center anton mb-4'>¡Ingresa Ya!</h1>

                            <div class="text-center">
                                <button class="btn btn  mb-3 border border rounded-circle" type="button"><i class="bi bi-google"></i></button>
                                <button class="btn btn  mb-3 mx-3 border border rounded-circle" type="button"><i class="bi bi-facebook"></i></button>
                            </div>


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

                            <p><a href="#" class="link-underline-light">¿Olvidaste tu contraseña?</a></p>
                            <div className=' text-center mt-4'>
                                <button type="button" class="btn btn-danger .col-md-4" data-bs-toggle="modal" data-bs-target="#AñadirModal" data-bs-whatever="@mdo" >Continuar</button>
                            </div>
                        </div>

                    </div>
=======
       
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
>>>>>>> 8b3b4f30ad320280a629729ad91124c492b2e62b
                </div>

            </div>
        </div>
    )
}