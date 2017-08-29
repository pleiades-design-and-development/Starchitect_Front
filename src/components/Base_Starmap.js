import React from 'react';

export default class Base_Starmap extends React.Component {
  
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
