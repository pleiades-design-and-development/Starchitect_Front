import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Base_Starmap from './Base_Starmap';
import Starmap from './Starmap';
import Wiki_Template from './Wiki_Template';
import App_Profile from './App_Profile';
import NoMatch from './NoMatch';
import ProseExplorerTemplate from './ProseExplorerTemplate';

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
              <Route path='/ProseExplorerTemplate' component={ProseExplorerTemplate} />
              <Route path='/:object' component={Wiki_Template} />
            </Switch>
          </Base_Starmap>
        </BrowserRouter>
      </div>
    );
  }
}
