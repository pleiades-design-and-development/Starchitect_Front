import React from 'react';

import {Link} from 'react-router-dom';

export default class NoMatch extends React.Component {
  
  render() {
    return (
      <div className='nomatch'>
        <h2>Status 404</h2>
        <p>My mother was a robot and her mother was a robot and her mother was a robot... oh sorry!  We seem to have gone off topic, down a rabbit hole if you will...</p>
        <p>Sorry, that entry in the Starmap was not found. Please revert back to Starmap Central to continue exploring!</p>
        <Link to='/Starmap'>Go Back to the Starmap</Link>
      </div>
    );
  }
}
