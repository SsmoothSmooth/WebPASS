import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home';
import CadastroUsuario from './Pages/Cadastros/Usuario';
import CadastroEmpresa from './Pages/Cadastros/Empresa';

// Funcinando SPA - 
//Utilizando a biblioteca react router dom
//BrowserRouter:
//Switch:
//Route:
import { BrowserRouter, Switch, Route} from 'react-router-dom'; 

//Criar uma pagina de erros
//Simulando o erro 404
const Pagina404 = () => (<div>Página 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Cadastro/Usuario" component={CadastroUsuario} />
      <Route path="/Cadastro/Empresa" component={CadastroEmpresa} />
      <Route component={Pagina404} />
      

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')// Renderiza o Reacj dentro do root  
);

