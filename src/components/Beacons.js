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
        <h2>Your Beacons</h2>
        <div id='beacon_bucket'>
          {beacons.map((beacon, index) => (
            <div className='beacon_box' key = {index}>
              <Link to='/{beacon}'>{beacon}</Link>
            </div>
          ))}
        </div>
     </div>
    );
  }
}
