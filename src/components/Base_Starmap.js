import React from 'react';

import {Link} from 'react-router-dom';

import App_Profile from './App_Profile';

export default class Base_Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Base Layout for the Starmap</p>
        <a href={'./Profile'}>Profile</a>
        {this.props.children}
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="Stars.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}
