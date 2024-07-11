import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <div className="navbar">
            Navbar
        </div>
    )
}


export default Navbar



import react, { useState } from 'react';
import {
    Collapse,  
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';