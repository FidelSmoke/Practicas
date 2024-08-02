import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import Graficas from '../../Components/Graficas';
import Sidebar from '../../Components/Sidebar';

const Inicio = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
    datasets: [
      {
        label: 'Ventas',
        data: [65, 59, 580, 81, 56, 55, 67, 100, 306, 100,300,600]
      },
      {
        label: 'Gastos',
        data: [28, 48, 40, 19, 86, 27, 72, 30, 0,300, 300, 700]
      },
      {
        label: 'Productos Con Menos Stock',
        data: [18, 58, 8, 1, 9, 3, 0, 4, 10,400, 300, 200]
      },
      {
        label: 'DDDD',
        data: [100, 200, 300, 400, 700, 50, 49, 35, 110, 200, 300, 800]
      }
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
    <div className='flex'>
      <Sidebar />
      <div className="w-100 container">
        <div className='col-100'>
          <p className='mt-5 text-center pb-3 pt-3 text-white'>BIENVENIDO ADMINISTRADOR | ESTE ES EL FORMULARIO DE VENTAS</p>
          <Graficas data={data} options={options} tipo='line' className='mt-2' />
        </div>
      </div>
    </div>
  )
}

export default Inicio