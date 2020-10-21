import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Content.css'

function Content(){
    return(
        
        <section>          
            <img className="Logo" src={Logo} alt="PASS logo" />
        
            <p>
                Não sei o que fazer, que tal viajar com a gente as melhores 
                histórias são encontradas entre as páginas de um passaporte 
                
                            aqui você encontrara os melhores valores
            </p>
        </section>
    );
}

export default Content;