  
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageProdutos from './pages/produtos';
import PageCadastroProdutos from './pages/cadastro-produtos';
import NossasLojas from './pages/nossas-lojas';
import FaleConosco from './pages/fale-conosco';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageProdutos} />
        <Route path="/produtos" component={PageProdutos} />
        <Route path="/lojas" component={NossasLojas} />
        <Route path="/contato" component={FaleConosco} />
        <Route path="/admin/cadastro-produtos" component={PageCadastroProdutos} />
      </Switch>
    </BrowserRouter>
  );
}