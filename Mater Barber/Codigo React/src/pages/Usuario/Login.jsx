import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'


export default function Login() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // function handleSubmit(event){
    //     event.preventDefault();
    //     axios.post('http://localhost:8081/login', {email, password})
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }
    return (
        <div class="login">
            <div className="min-vh-100 p-5 align-content-center mx-5 justify-content-end">
                <div class="container" className='container p-5 w-50 border border-white table-responsive border rounded-4 bg-dark.bg-gradient '>
                    <div className="row">
                        <div className="col-6">
                            <img src="/LOGO.png" alt="" className='img-fluid' />
                        </div>
                        <div className="col-6">
                            <h1 className='text-white text-center anton mb-4'>¡Ingresa Ya!</h1>

                            <form 
                            // onSubmit={handleSubmit}
                            >
                            <div class="text-center">
                                <button class="btn btn  mb-3 border border rounded-circle text-primary bg-white" type="button"> <i class="bi bi-google"></i> </button>
                                <button class="btn btn  mb-3 mx-3 border border rounded-circle text-primary bg-white" type="button"><i class="bi bi-facebook"></i></button>
                            </div>


                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
                                <input type="text-white" class="form-control " placeholder="Nombre de usuario" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon2"><i class="bi bi-envelope"></i></span>
                                <input type="email" class="form-control" placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                // onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="bi bi-file-lock"></i></span>
                                <input type="password" class="form-control" placeholder='Contraseña' aria-label="Amount (to the nearest dollar)" 
                                // onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <p><a href="#" class="link-underline-light text-decoration-none text-warning">¿Olvidaste tu contraseña?</a></p>
                            <div className=' text-center mt-4'>
                                <a href="/Index"><button type="button" class="btn btn-outline-warning">Continuar</button></a>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}