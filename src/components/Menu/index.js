import React from 'react';
import Logo from '../../assets/img/wallpa.jpg'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="PASS logo"/>
            </a>
        </nav>
    );
}

export default Menu; // exporta para poder importar em outro lugar