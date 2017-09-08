import React from 'react';

import {Link} from 'react-router-dom';

export default class Beacons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beacons: [],
      userId: sessionStorage.getItem('userId'),
      api_token: sessionStorage.getItem('api_token'),
    }
  }

  componentDidMount() {
    const { userId } = this.state;
    fetch(`https://starchitect.herokuapp.com/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({beacons: response.data.attributes.beacons});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  render() {
    const { beacons } = this.state;
    return (
      <div className='beaconWindow'>
        <br/>
        <h3 style={{color: 'white', fontWeight: '100'}}>Here are you beacons. Select your location to travel at warp speed back to it!</h3>
        <div id='beacon_bucket'>
          {beacons.map((beacon, index) => (
            <div className='beacon_box' key = {index}>
              <Link to={`./${beacon}`} className='link-color'>
                <svg width="50%" height="50%" viewBox="0 0 643 601" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Artboard">
                            <g id="Group" transform="translate(223.000000, 271.000000)">
                                <path d="M189.703125,110.5 L190,110.5 L190,75.8798283 L95,0 L0,75.8798283 L0,110.5 L0.296875,110.5 L95,34.8572961 L189.703125,110.5 Z" id="Combined-Shape1" fill="#222034"></path>
                                <path d="M189.703125,165.75 L190,165.75 L190,131.129828 L95,55.25 L0,131.129828 L0,165.75 L0.296875,165.75 L95,90.1072961 L189.703125,165.75 Z" id="Combined-Shape2" fill="#3F3F74"></path>
                                <path d="M189.703125,221 L190,221 L190,186.379828 L95,110.5 L0,186.379828 L0,221 L0.296875,221 L95,145.357296 L189.703125,221 Z" id="Combined-Shape3" fill="#76428A"></path>
                            </g>
                            <polygon id="Triangle-2" stroke="#6969C0" strokeWidth="5" points="318 138 543 518 93 518"></polygon>
                        </g>
                    </g>
                </svg>
                <br/>
                {beacon}
              </Link>
            </div>
          ))}
        </div>
     </div>
    );
  }
}
