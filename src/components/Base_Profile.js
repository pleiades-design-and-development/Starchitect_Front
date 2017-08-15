import React from 'react';

import {Link} from 'react-router-dom';

export default class Base_Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>This is the Base Layout for the Profile... AWESOME!!</p>
        <a href={'./Starmap'}>Starmap</a>
        {this.props.children}
      </div>
    );
  }
}
