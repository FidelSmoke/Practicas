import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import Graficas from '../../Components/Graficas';
import Sidebar from '../../Components/Sidebar';

const Inicio = () => {
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
    <div className='flex'>
      <Sidebar />
      <div className="w-100">
        <div className='col-100'>
          <p className='mt-5 text-center pb-3 pt-3 text-white'>BIENVENIDO ADMINISTRADOR | ESTE ES EL FORMULARIO DE VENTAS</p>
        </div>
        <div className='container pt-3'>
          <div className="row g-4">
            <div className="text-center justify-content-center">
              <Graficas data={data} tipo='line' options={options} />
            </div>
            <div className="col-12 col-sm border border-2 mx-0 mx-sm-5 border-secondary  text-center">
              <h3 className='pt-4  text-white'>Prductos vendidos</h3>
              <h4 className='pt-2 text-white'>1234 unidades</h4>
              <h4 className='pb-4 text-success'>+ 8% este mes</h4>
            </div>
            <div className="col-12 col-sm border mx-0 mx-sm-5 border-2 border-secondary text-center">
              <h3 className='pt-4 text-white'>Total ganancias</h3>
              <h4 className='pt-2 text-white'>COP 10.000.000</h4>
              <h4 className='pb-4 text-danger'>-5 % este mes</h4>
            </div>
          </div>
          <div className="container border border-2 border-secondary my-5 p-3">
            <div className="row w-100 justify-content-between">
              <h4 className="col-12 col-sm-10 text-white">Productos más vendidos</h4>
              <select name="" id="" className="form-select col-12 col-sm mx-2">
                <option value="">Enero</option>
                <option value="">Febrero</option>
                <option value="">Marzo</option>
                <option value="">Abril</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio