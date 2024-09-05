import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ResetPass() {

    return (
        <div className="resetpass">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div className="container p-5 w-50 border border-4 border-white table-responsive border rounded-4 bg-dark.bg-gradient">
                    <div className="row">
                        <div className="">
                            <h1 className="text-center text-white anton mb-4 ">Recupera tu contraseña</h1>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img src="./passs.jpeg" alt="" className="img-fluid w-50" />
                        </div>
                        {/* <div className="">
                            <h1 className="text-center text-white anton mb-4 ">Recupera tu contraseña</h1>
                        </div> */}
                        <h3 className="text-white text-center anton mb-2">¡Ingresa tu correo!</h3>
                        <div className="input-group mb-3 w-50 mx-auto mt-4">
                            <input clas required type="email" className="form-control" name='email' placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className=' text-center mt-4 mb-4 text-sm-center'>
                            <button type="submit" className="btn btn-outline-warning">Continuar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}