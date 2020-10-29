import React from 'react';
import './banner.css';

function Content(){
    return(
        
        <section>     
            <div className="Banner1">
            <p>
                Rio de Janeiro
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

            <div className="Banner2">
                <p>
                    Walt Disney World
                </p>
                <p>
                    Flórida
                </p>
                <p>
                    Preço a partir de
                </p>
                <p>
                    R$3200
                </p>
            </div>

            <div className="Banner3">
                <p>
                    Tokyo
                </p>
                <p>
                    Japão
                </p>
                <p>
                    Preço a partir de
                </p>
                <p>
                    R$6200
                </p>
            </div>

            <div className="Banner4">
                <p>
                    Paris
                </p>
                <p>
                    França
                </p>
                <p>
                    Preço a partir de
                </p>
                <p>
                    R$5200
                </p>
            </div>
        </section>
    );
}

export default Content;