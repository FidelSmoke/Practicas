import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import Graficas from '../Components/Graficas'
const Inicio = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
    datasets: [
      {
        label: 'Ventas',
        data: [65, 59, 80, 81, 56, 55, 67, 100, 6, ]
      },
      {
        label: 'Gastos',
        data: [28, 48, 40, 19, 86, 27, 72, 30, 0, ]
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
      <p className='mt-2 text-center pb-3 pt-3 text-white'>BIENVENIDO ADMINISTRADOR | ESTE ES EL FORMULARIO DE VENTAS</p>

      <Graficas data={data} options={options} tipo='line'className='mt-2' />
      {/* <div>
        <div class="row">
          <div class="col-sm-3 mt-5 mx-5 ">
            <div class="card bg-dark border border-1">
              <div class="card-body">
                <h5 class="card-title text-white">Special title treatment</h5>
                <p class="card-text text-white ">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-3 mt-5 mx-5">
            <div class="card bg-dark border border-1 justify-content-center">
              <div class="card-body">
                <h5 class="card-title text-white">Special title treatment</h5>
                <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  )
}

export default Inicio