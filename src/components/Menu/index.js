import React from 'react';

//Usando o React-router-dom para criar um comportamento SPA
//Link:
import { Link } from 'react-router-dom';

import './Menu.css';
import Button from '../Button';
import Logo from '../../assets/icons/avion.svg';
import PASS from '../../assets/icons/PASS.svg';
import registrer from '../../assets/icons/registrer.svg';
import Login from '../../assets/icons/login.svg';

function Menu() {
    return (
        <nav className="Menu">
            
            <ul class="container">
                <li><img className="Logo" src={Logo} alt="PASS logo" /><Button as={Link} className='ButtonLogo' to="https://www.google.com">
                    Quem Somos
                </Button></li>

                <li><img className="PASS" src={PASS} alt="passagem logo" /><Button as={Link} className='ButtonPassagem' to="https://www.google.com">
                    Comprar passagens
                </Button></li>

                <li><img className="Cadastro" src={registrer} alt="Cadastro logo" /><Button as={Link} className='Cadastro' to="/Cadastro/Usuario">
                    Cadastre-se
                </Button></li>

                <li><img className="Buttonlogin" src={Login} alt="PASS login" /><Button as={Link} className='ButtonLogin' to="https://www.google.com">
                    Fazer agora login
                </Button></li>

            </ul>
            
            
         </nav>
    );

}
export default Menu // exporta para poder importar em outro lugar