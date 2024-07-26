import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from '../src/Components/Sidebar'
import AddBarberos from './pages/AddBarberos'
import './App.scss';
import 'bootstrap/scss/bootstrap.scss'
import Perfil from './pages/Perfil'
import Inicio from './pages/Inicio'
import Inventario from './pages/inventario'
function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
        <Navbar />
          <Routes>
            <Route exact path='*' element={<Navbar />}></Route>
            <Route exact path='/' element={<Inicio />}> </Route>
            <Route exact path='/Inventario' element={<Inventario />}> </Route>
            <Route exact path='/addBarberos' element={<AddBarberos />}> </Route>
            <Route exact path='/Perfil' element={<Perfil />}> </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
