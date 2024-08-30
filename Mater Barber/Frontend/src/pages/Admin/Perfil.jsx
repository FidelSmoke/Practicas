import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import Sidebar from '../../Components/Sidebar'

export default function Perfil() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="w-100">
                <h2 className='text-white'></h2>
            </div>
        </div>
    )
}