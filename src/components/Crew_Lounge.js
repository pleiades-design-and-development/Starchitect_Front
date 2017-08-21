import React from 'react';

import {Progress} from 'semantic-ui-react';

export default class Crew_Lounge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crew: [],
    }
  }

  render() {
    const {crew} = this.state;
    const crew_setup = crew.map(member => {
      <div className='member_box'>
        <img src={member.pic} alt='Avatar' className='profile_image' />
        <p className='member_name'>{member.firstname} {member.lastname} Name</p>
        <p className='member_rank'>{member.rank} Rank</p>
        <Progress percent={member.sashId.exp} indicating />
        <p className='member_location'>{member.last_location} Last Location</p>
        <p className='last_sub'>{member.last_sub} Last Submission</p>
      </div>
    });

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
