import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseStarmap from './Base_Starmap';
import Starmap from './Starmap';
import WikiTemplate from './Wiki_Template';
import NoMatch from './NoMatch';
import ProseExplorerTemplate from './ProseExplorerTemplate';

import basename from '../config';

export default class App_Starmap extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter basename={basename}>
          <BaseStarmap>
            <Switch>
              <Route path='/Starmap' component={Starmap} />
              <Route path='/:object' component={WikiTemplate} />
              <Route path='/ProseExplorerTemplate' component={ProseExplorerTemplate} />
              <Route path='/:object' component={Wiki_Template} />
            </Switch>
          </BaseStarmap>
        </BrowserRouter>
      </div>
    );
  }
}
