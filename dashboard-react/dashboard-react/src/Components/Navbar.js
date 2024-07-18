import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidUserCircle } from "react-icons/bi";
const Navbar = () => {
    return (
        <div className="navbar border-bottom mt-0 justify-content-end ">
             <small className='text-white d-sm-block fw-bold mt-4'>Hola, Administrador</small>
             <BiSolidUserCircle className='fs-4 mx-5 mt-4 bg-white'/>
        </div>
    )
}



export default Navbar
