import React from 'react'

export default function Login() {
    return (
        <div className='container'>
            <h1 className='text-white text-center mx-5'><i class="bi bi-4-circle-fill mx-3 text-info"></i>LOGIN</h1>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
        </div>
    )
}