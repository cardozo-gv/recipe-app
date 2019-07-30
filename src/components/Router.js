import React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router = () =>(
  <BrowserRouter>
    <Switch>
      <Route path="/recipe-app/" component={App} exact/>
      <Route path="/recipe/:id" component={Recipe}/>
    </Switch>
  </BrowserRouter>
)


export default Router;
