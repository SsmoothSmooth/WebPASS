import React from 'react';
import './banner.css';

function Content(){
    return(
        
        <section>
            <div className="container">

                <div className="card">
                    <div className="Banner1">
                        <img alt=""/>
                    </div>
                    <div className="ofert">
                        <h3>Rio de Janeiro </h3>
                        <p>Tour Concovado </p>
                        <p>Preço a partir de</p>
                        <p className="price">R$ 600</p>
                    </div>
                </div>

                <div className="card">
                    <div className="Banner2">
                        <img alt=""/>
                    </div>
                    <div className="ofert">
                        <h3>Walt Disney World</h3>
                        <p>Flórida</p>
                        <p>Preço a partir de</p>
                        <p className="price">R$ 3200</p>
                    </div>
                </div>

                <div className="card">
                    <div className="Banner3">
                        <img alt=""/>
                    </div>
                    <div className="ofert">
                        <h3>Tokyo</h3>
                        <p>Japão</p>
                        <p>Preço a partir de</p>
                        <p className="price">R$ 6200</p>
                    </div>
                </div>

                <div className="card">
                    <div className="Banner4">
                        <img alt=""/>
                    </div>
                    <div className="ofert">
                        <h1>Paris</h1>
                        <p>França</p>
                        <p>Preço a partir de</p>
                        <p className="price">R$ 5200</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Content;