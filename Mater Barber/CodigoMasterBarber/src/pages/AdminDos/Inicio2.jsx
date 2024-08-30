import React from 'react'
import SidebarAdmin from '../../Components/SidebarAdmin'
import NavbarAdmin from '../../Components/NavbarAdmin'

export default function Inicio2() {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ventas',
                data: [65, 59, 580, 81, 56, 55, 67, 100, 306, 100, 300, 600]
            },
            {
                label: 'Gastos',
                data: [28, 48, 40, 19, 86, 27, 72, 30, 0, 300, 300, 700]
            },

        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    };
    return (
        <div className=''>
            <NavbarAdmin />
            <SidebarAdmin />
        </div>

    )
}
