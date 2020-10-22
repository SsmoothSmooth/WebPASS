import React from 'react';

//Usando o React-router-dom para criar um comportamento SPA
//Link:
import { Link } from 'react-router-dom';

import './Menu.css';
import Button from '../Button'


function Menu() {
    return (
        <nav className="Menu">
            
            <ul class="container">
                <li><Button as={Link} className='ButtonLogo' to="https://www.google.com">
                    Quem Somos
                </Button></li>

                <li><Button as={Link} className='ButtonPassagem' to="https://www.google.com">
                    Comprar passagens
                </Button></li>

                <Button as={Link} className='Cadastro' to="/Cadastro/Usuario">
                    Cadastre-se
                </Button>

                <li><Button as={Link} className='ButtonLogin' to="https://www.google.com">
                    Login
                </Button></li>

            </ul>
            
        </nav>
    );
}

export default Menu; // exporta para poder importar em outro lugar