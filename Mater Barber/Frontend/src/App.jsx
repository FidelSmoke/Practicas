import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'


// IMPORTACION PARA RUTAS
import Login from './pages/Usuario/Login'
import Index from './pages/default/Index';
import Registro from './pages/Usuario/Registro';
import GestionarBarberos from './pages/Admin/GestionarBarberos';
import Inventario from './pages/Admin/Inventario';
import HrsBarberos from './pages/Admin/HrsBarberos';
import InicioAdmin from './pages/Admin/InicioAdmin';
import Analisisdeventas from './pages/Admin/Analisisdeventas';
import Gestiondeventas from './pages/Admin/Gestiondeventas';
import EnvEmail from './pages/default/EnvEmail';
import Cambiarpasscod from './pages/default/Cambiarpasscod';
import IndexUser from './pages/Usuario/IndexUser';
import Horasdeiby from './pages/Admin/Horasdeiby';


// ESTILOS DE LA PAGINA
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'



/**
  ENRUTADOR
 */
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            {/* Ruta principal de la aplicación */}
            <Route exact path='/' element={<Index />}></Route>
            {/* Ruta de an lisis de ventas*/}
            <Route exact path='/analisisdeventas' element={<Analisisdeventas />}></Route>
            {/* Ruta de inicio del administrador */}
            <Route exact path='/InicioAdmin' element={<InicioAdmin />}></Route>
            {/* Ruta de inventario */}
            <Route exact path='/Inventario' element={<Inventario />}></Route>
            {/* Ruta de horarios de los barberos */}
            <Route exact path='/HrsBarberos' element={<HrsBarberos />}></Route>
            {/* Ruta de gesti n de barberos */}
            <Route exact path='/GestionarBarberos' element={<GestionarBarberos />}></Route>
            {/* Ruta de login */}
            <Route exact path='/Login' element={<Login />}></Route>
            {/* Ruta de registro */}
            <Route exact path='/Registro' element={<Registro />}></Route>
            {/* Ruta de env o de correo electr nico para recuperar contraseña */}
            <Route exact path='/EnvEmail' element={<EnvEmail />}></Route>
            {/* Ruta de gesti n de ventas */}
            <Route exact path='/Gestiondeventas' element={<Gestiondeventas />}></Route>
            {/* Ruta de cambiar clave */}
            <Route exact path='/cambiarpasscod' element={<Cambiarpasscod />}></Route>
            {/* Ruta de inicio de usuario */}
            <Route exact path='/IndexUser' element={<IndexUser />}></Route>
            {/* Ruta de horarios de Deiby */}
            <Route exact path='/Horasdeiby' element={<Horasdeiby />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
