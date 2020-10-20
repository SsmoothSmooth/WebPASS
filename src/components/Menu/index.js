import React from 'react';
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <ul class="container">
                <li><Button as="a" className='ButtonLogin' href="https://www.google.com">
                    Quem Somos
                </Button></li>

                <li><Button as="a" className='ButtonLogin' href="https://www.google.com">
                    Comprar passagens
                </Button></li>

                <li><Button as="a" className='ButtonLogin' href="https://www.google.com">
                    Cadastre-se
                </Button></li>

                <li><Button as="a" className='ButtonLogin' href="https://www.google.com">
                    Login
                </Button></li>
            </ul>
            
        </nav>
    );
}

export default Menu; // exporta para poder importar em outro lugar