import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BackMenu from '../../../components/BackMenu';
import Footer from '../../../components/Footer';
import FormField from '../../../components/Formfield';
import Button from '../../../components/Button'

function CadastroUsuario() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
       <main>
        <BackMenu />


        <h1>Cadastro Usuário: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          
          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome completo"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
            />

          <FormField
            label="RG/CPF"
            type="text"
            name="identificacao"
            value={values.identificacao}
            onChange={handleChange}
            />

          <FormField
            label="Email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            />

          <FormField
            label="Confirmar Email"
            type="text"
            name="ConfEmail"
            value={values.ConfEmail}
            onChange={handleChange}
            />

          <FormField
            label="Senha"
            type="password"
            name="senha"
            value={values.senha}
            onChange={handleChange}
            />

          <FormField
            label="Confirmar senha"
            type="passqord"
            name="ConfSenha"
            value={values.ConfSenha}
            onChange={handleChange}
            />       

          <Button>
            Cadastrar
          </Button>
        </form>

        <Link to="/">
          Ir para home
        </Link>
        <Footer />
        </main>

  );
}

export default CadastroUsuario;