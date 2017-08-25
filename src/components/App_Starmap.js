import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Base_Starmap from './Base_Starmap';
import Starmap from './Starmap';
import Wiki_Template from './Wiki_Template';
import App_Profile from './App_Profile';
import NoMatch from './NoMatch';

import basename from '../config';

export default class App_Starmap extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={basename}>
          <Base_Starmap>
            <Switch>
              <Route path='/Starmap' component={Starmap} />
              <Route path='/:object' component={Wiki_Template} />
              <Route path="/NoMatch" component={NoMatch} status={404} />
            </Switch>
          </Base_Starmap>
        </BrowserRouter>
      </div>
    );
  }
}
