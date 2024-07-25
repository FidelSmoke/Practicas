import 'bootstrap/scss/bootstrap.scss'
import React from 'react' 
import Graficas from '../Components/Graficas'
const Inicio= () => {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
        datasets: [
          {
            label: 'Ventas',
            data: [65, 59, 80, 81, 56, 55, 67, 100, 6]
          },
          {
            label: 'Gastos',
            data: [28, 48, 40, 19, 86, 27, 72,30, 0]
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    return (
        <div>
        <p className='mt-5 text-center pb-3 pt-3 text-white'>BIENVENIDO ADMINISTRADOR | ESTE ES EL FORMULARIO DE VENTAS</p>
        <Graficas data={data} options={options} tipo='line'/>
        </div>
    )
}

export default Inicio