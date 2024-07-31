import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import AddBarberos from './pages/Admin/AddBarberos';
import Inventario from './pages/Admin/inventario'
import Perfil from './pages/Admin/Perfil';
import Inicio from './pages/Admin/Inicio';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import Login from './pages/Usuario/Login'
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route exact path='/' element={<Inicio />}> </Route>
            <Route exact path='/Inventario' element={<Inventario />}> </Route>
            <Route exact path='/Addbarberos' element={<AddBarberos />}> </Route>
            <Route exact path='/Perfil' element={<Perfil />}> </Route>
            <Route exact path='/Login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
