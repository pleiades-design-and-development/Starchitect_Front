import React from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../styles/semantic-ui-css/semantic.min.css';

import Splash from './Splash';
import App_Starmap from './App_Starmap';
import App_Profile from './App_Profile';
import Login from './Login';
import Signup from './Signup';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <BrowserRouter basename='/Starchitect_Front'>
          <Switch>
            <Route exact path='/' component={Splash}></Route>
            <Route path='/Starmap' component={App_Starmap}></Route>
            <Route path='/Profile' component={App_Profile}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Signup' component={Signup}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
