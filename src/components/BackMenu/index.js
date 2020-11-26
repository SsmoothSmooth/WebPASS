import React from 'react';

//Usando o React-router-dom para criar um comportamento SPA
//Link:
import { Link } from 'react-router-dom';

import './BackMenu.css';
import Button from '../Button';
import Logo from '../../assets/icons/avion.svg';
import PASS from '../../assets/icons/PASS.svg';
import registrer from '../../assets/icons/registrer.svg';
import Login from '../../assets/icons/login.svg';

function BackMenu() {
    return (
        <nav className="BackMenu">
            
            <ul className="container">
                <li>
                    <img className="Logo" src={Logo} alt="PASS logo" />
                    <Button as={Link} className='ButtonLogo' to="">
                    Quem Somos
                    </Button></li>
            </ul>
            
         </nav>
    );

}
export default BackMenu;