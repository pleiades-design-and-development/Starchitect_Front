import React from 'react';

import {Link} from 'react-router-dom';

export default class Base_Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile-container'>
        <div className='sidebar'>
          
        </div>
        <a href={'./Starmap'}>Starmap</a>
        {this.props.children}
      </div>
    );
  }
}
