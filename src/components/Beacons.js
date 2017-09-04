import React from 'react';

export default class Beacons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beacons: [],
      api_token: sessionStorage.getItem('api_token'),
    }
  }

  componentDidMount() {
    fetch("https://starchitect.herokuapp.com/api/v1/users", {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({beacons: response.data});
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
              <p>{beacon}</p>
            </div>
          ))}
        </div>
     </div>
    );
  }
}
