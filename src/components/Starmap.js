import React from 'react';

import {Link} from 'react-router-dom';

export default class Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '80vh'}}>
        <Link to='/Sun'><img id='sun' style={{width: '20em'}} src="Sun.png" alt="sun"/></Link>
        <Link to='/Earth'><img className='planets earth' src="p-earth.png" alt="earth"/></Link>
        <Link to='/Jupiter'><img className='planets jupiter' src="p-jupiter.png" alt="jupiter"/></Link>
        <Link to='/Mars'><img className='planets mars' src="p-mars.png" alt="mars"/></Link>
        <img id='glow' src="bg-glow.png" alt="glow"/>
      </div>
    );
  }
}
