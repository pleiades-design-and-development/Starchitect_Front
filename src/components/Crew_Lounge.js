import React from 'react';

import {Progress} from 'semantic-ui-react';

const api_token = 'RP44X2yF1VPDJHAdaWFcQ6dM';

export default class Crew_Lounge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crew: [],
      api_token: 'RP44X2yF1VPDJHAdaWFcQ6dM',
    }
  }

  componentDidMount() {
    fetch("https://starchitect.herokuapp.com/api/v1/users", {
      method: 'GET',
      headers: {
        'Authorization': 'Token token=RP44X2yF1VPDJHAdaWFcQ6dM',
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      console.log(response.data[0].attributes.callsign);
      this.state.crew = response.data
      console.log(this.state.crew);
    }).then(() => {
      // create a javascript builder (document.createElement(DIV)) to format data into "robot directory"
      // const crew_setup = crew.map(member => {
      //   <div className='member_box'>
      //     <img src='profile-image.jpeg' alt='Avatar' className='profile_image' />
      //     <p className='member_name'>Callsign: {member.attributes.callsign} </p>
      //     <p className='member_rank'>Rank: {member.attributes.rank} </p>
      //     <Progress percent={member.attributes.level} indicating />
      //     <p className='member_location'>Last Location: {member.last_location} </p>
      //     <p className='last_sub'>Last Submission: {member.last_sub} </p>
      //   </div>
      // });
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  render() {
    const {crew} = this.state;
    const crew_setup = crew.map(member => {
      <div className='member_box'>
        <img src='profile-image.jpeg' alt='Avatar' className='profile_image' />
        <p className='member_name'>Callsign: {member.attributes.callsign} </p>
        <p className='member_rank'>Rank: {member.attributes.rank} </p>
        <Progress percent={member.attributes.level} indicating />
        <p className='member_location'>Last Location: {member.last_location} </p>
        <p className='last_sub'>Last Submission: {member.last_sub} </p>
      </div>
    });
    console.log(crew_setup)

    return (
      <div className='crewWindow'>
        <h2>Crew Lounge</h2>
        <div className='crew_bucket'>
          {crew_setup}

          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>
          <div className='member_box'>
            <img src='profile-image.jpeg' alt='Avatar' className='member_image' />
            <p className='member_name'>Name</p>
            <p className='member_rank'>Rank</p>
            <Progress percent='35' indicating />
            <p className='member_location'>Last Location: Jupiter</p>
            <p className='last_sub'>Last Submission: Hello World</p>
          </div>

        </div>
     </div>
    );
  }
}
