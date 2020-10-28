import React from 'react';
import RioJ from '../../assets/img/RioJ.jpg';
import './banner.css';

function Content(){
    return(
        
        <section>     
            <div className="Banner1">     
            <img className="Rio" src={RioJ} alt="RioDeJaneiro" />
            <p>
                Férias Rio de Janeiro
            </p>
            <p>
                Tour Concovado
            </p>
            <p>
                Preço a partir de
            </p>
            <p>
                R$600
            </p>
            </div>
        </section>
    );
}

export default Content;