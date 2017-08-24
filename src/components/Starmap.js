import React from 'react';

export default class Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '80vh'}}>
        <img id='sun' style={{width: '20em'}} src="Sun.png" alt="sun"/>
        <img className='planets earth' src="p-earth.png" alt="earth"/>
        <img className='planets jupiter' src="p-jupiter.png" alt="jupiter"/>
        <img className='planets mars' src="p-mars.png" alt="mars"/>
      </div>
    );
  }
}
