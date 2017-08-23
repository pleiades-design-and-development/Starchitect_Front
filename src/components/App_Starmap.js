import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Base_Starmap from './Base_Starmap';
import Starmap from './Starmap';
import Wiki_Template from './Wiki_Template';
import App_Profile from './App_Profile';

export default class App_Starmap extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename='/Starchitect_Front'>
          <Base_Starmap>
            <Switch>
              <Route to='/Starmap' component={Starmap}></Route>
              <Route to='/wiki_page' component={Wiki_Template}></Route>
              <Route></Route>
            </Switch>
          </Base_Starmap>
        </BrowserRouter>
      </div>
    );
  }
}
