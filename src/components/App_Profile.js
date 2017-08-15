import React, {PropTypes} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Base_Profile from './Base_Profile';
import Feed from './Feed';

export default class App_Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Base_Profile>
            <Switch>
              <Route to='/Profile' component={Feed}></Route>
            </Switch>
          </Base_Profile>
        </BrowserRouter>
      </div>
    );
  }
}
