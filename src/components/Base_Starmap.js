import React from 'react';

import {Link} from 'react-router-dom';

export default class Base_Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='base_starmap'>
        <h2>Welcome to the Starchive Explorers!</h2>
        <p>Click on the Astronomical Object you would like to EXPLORE!!!</p>
        <a className='starmap_link link-color' href={'./Profile'}>Profile</a>
        <a className='starmap_link link-color' href={'./Starmap'}>Back to the Starmap</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}
