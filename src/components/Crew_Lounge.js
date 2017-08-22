import React from 'react';

import {Progress} from 'semantic-ui-react';

export default class Crew_Lounge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crew: [],
      api_token: 'Token token=RP44X2yF1VPDJHAdaWFcQ6dM',
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
      this.setState({crew: response.data});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  render() {
    const {crew} = this.state;
    console.log(crew);

    return (
      <div className='crewWindow'>
        <h2>Crew Lounge</h2>
        <div id='crew_bucket'>
          {crew.map((member, index) => (
            <div className='member_box' key = {index}>
              <img src='profile-image.jpeg' alt='Avatar' className='profile_image' />
              <p className='member_name'>Callsign: {member.attributes.callsign} </p>
              <p className='member_rank'>Rank: {member.attributes.rank} </p>
              <Progress percent={member.relationships.points.data} indicating />
              <p className='member_location'>Last Location: {/*member.last_location*/} </p>
              <p className='last_sub'>Last Submission: {/*member.last_sub*/} </p>
            </div>
          ))}
        </div>
     </div>
    );
  }
}
