import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';

const Routes = () => {   
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
//  <Route path='/artist/:artistId' component={Artist} />

//import Artist from './components/Artist/index';