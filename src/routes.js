import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Flight from './components/Artist/index';

const Routes = () => {   
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/:flightId' component={Flight} />
      <Route path='/' component={Home}  />
      </Switch> 
    </BrowserRouter>
  );
};
export default Routes;
// 

//