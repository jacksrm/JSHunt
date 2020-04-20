import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';

export default function Routs() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}