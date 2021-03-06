import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import { render } from '@testing-library/react';
import PageLogin from './Paginas/PageLogin';
import styleGlobal from './assets/styles/global.css';
import Initial from './Paginas/Inicial';
import Detalhe from './Paginas/Detalhe-Produto';
import Cesta from './Paginas/Cesta-Produto';
import Busca from './Paginas/Busca-Produto';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Initial} exact />
      <Route path='/login' component={PageLogin} exact />
      <Route path='/detalhe-produto' component={Detalhe} exact />
      <Route path='/cesta-produto' component={Cesta} exact />
      <Route path='/busca-produto' component={Busca} exact />
    </BrowserRouter>
  );
}

export default App;