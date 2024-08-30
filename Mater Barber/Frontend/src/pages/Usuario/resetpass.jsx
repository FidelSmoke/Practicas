import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ResetPass() {
    return (
        <div className="resetpass">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div className="container p-5 w-50 border border-4 border-white table-responsive border rounded-4 bg-dark.bg-gradient">
                    <div className="row">
                        <div className="text-center p-5  ">
                            <img src="./password.png" alt="" className="img-fluid" />
                        </div>
                        <div className="">
                            <h1 className="text-center text-white anton mb-4 ">Recupera tu contraseña</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}