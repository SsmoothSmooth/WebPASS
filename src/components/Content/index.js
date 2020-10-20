import React from 'react';
import Logo from '../../assets/img/Logo.png'

function Content(){
    return(
        <section>          
            <img className="Logo" src={Logo} alt="PASS logo" />
        </section>
    );
}

export default Content;