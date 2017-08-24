import React, {PropTypes} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Base_Profile from './Base_Profile';
import FeedPage from './FeedPage';
import Beacons from './Beacons';
import Submissions from './Submissions';
import Crew_Lounge from './Crew_Lounge';

import basename from '../config';

export default class App_Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={basename}>
          <Base_Profile>
            <Switch>
              <Route path='/Profile' component={FeedPage}></Route>
              <Route path='/Beacons' component={Beacons}></Route>
              <Route path='/Submissions' component={Submissions}></Route>
              <Route path='/CrewLounge' component={Crew_Lounge}></Route>
            </Switch>
          </Base_Profile>
        </BrowserRouter>
      </div>
    );
  }
}
