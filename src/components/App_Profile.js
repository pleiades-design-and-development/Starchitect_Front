import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseProfile from './Base_Profile';
import FeedPage from './FeedPage';
import Beacons from './Beacons';
import Submissions from './Submissions';
import CrewLounge from './Crew_Lounge';

import basename from '../config';

export default class App_Profile extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter basename={basename}>
          <BaseProfile>
            <Switch>
              <Route path='/Profile' component={FeedPage}></Route>
              <Route path='/Beacons' component={Beacons}></Route>
              <Route path='/Submissions' component={Submissions}></Route>
              <Route path='/CrewLounge' component={CrewLounge}></Route>
            </Switch>
          </BaseProfile>
        </BrowserRouter>
      </div>
    );
  }
}
