import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';  // Importa tu componente de ruta privada
import AccessDenied from './pages/default/AccessDenied'; // Importa el componente de acceso denegado

// IMPORTACION PARA RUTAS
import Login from './pages/Usuario/Login';
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

// ESTILOS DE LA PAGINA
import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            {/* Rutas públicas */}
            <Route exact path='/' element={<Index />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/Registro' element={<Registro />} />
            <Route exact path='/EnvEmail' element={<EnvEmail />} />
            <Route exact path='/cambiarpasscod' element={<Cambiarpasscod />} />

            {/* Rutas privadas para administrador */}
            <Route
              exact
              path='/InicioAdmin'
              element={<PrivateRoute roles={['1']} element={<InicioAdmin />} />}
            />
            <Route
              exact
              path='/GestionarBarberos'
              element={<PrivateRoute roles={['1']} element={<GestionarBarberos />} />}
            />
            <Route
              exact
              path='/Inventario'
              element={<PrivateRoute roles={['1']} element={<Inventario />} />}
            />
            <Route
              exact
              path='/HrsBarberos'
              element={<PrivateRoute roles={['1']} element={<HrsBarberos />} />}
            />
            <Route
              exact
              path='/Analisisdeventas'
              element={<PrivateRoute roles={['1']} element={<Analisisdeventas />} />}
            />
            <Route
              exact
              path='/Gestiondeventas'
              element={<PrivateRoute roles={['1']} element={<Gestiondeventas />} />}
            />

            {/* Rutas privadas para barberos */}
            <Route
              exact
              path='/HorasBarberos'
              element={<PrivateRoute roles={['2', '1']} element={<HrsBarberos />} />}
            />

            {/* Rutas privadas para clientes */}
            <Route
              exact
              path='/IndexUser'
              element={<PrivateRoute roles={['3']} element={<IndexUser />} />}
            />

            {/* Ruta de acceso denegado */}
            <Route exact path='/access-denied' element={<AccessDenied />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
