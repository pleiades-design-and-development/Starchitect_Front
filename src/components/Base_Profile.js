import React from 'react';

import { Menu, Progress, Button, Popup, Icon } from 'semantic-ui-react'

import {Link} from 'react-router-dom';

const mode_text = {
  'Explorer': <p>Go to Creator Mode</p>,
  'Creator' : <p>Go to Explorer Mode</p>,
};

export default class Base_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Explorer',
      active: false,
      api_token: sessionStorage.getItem('api_token'),
      userId: sessionStorage.getItem('userId'),
      user: {},
    }
  }

  componentDidMount() {
    fetch(`https://starchitect.herokuapp.com/api/v1/users/${this.state.userId}`, {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({user: response.data});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  handleModeClick = () => {
    this.setState({ active: !this.state.active });
    if(this.state.mode === 'Explorer'){
      this.setState({mode: 'Creator'});
    } else{
      this.setState({mode: 'Explorer'});
    }
  }

  render() {
    const {mode, active, user} = this.state;
    console.log(user);
    return (
      <div className='profile-container'>
        <div id='sidebar'>
          <Menu vertical id='menu'>
            <img src='profile-image.jpeg' alt='profile avatar' className='profile_image'/>
            <p className='callsign'>{Object.keys(user).length ? user.attributes.callsign : 'Callsign'}</p>
            <Menu.Item name='rank' id='rank'>
              <img src='cadetBadge.svg' alt='rank badge' />
              <p style={{textTransform: 'uppercase', marginTop: '2px', marginLeft: '5px'}} className='rank'>{Object.keys(user).length ? user.attributes.rank : 'Rank'}</p>
            </Menu.Item>
            <Menu.Item name='progress-bar' id='progress_bar'>
              <p>Experience Points</p>
              <Progress size='small' percent={Object.keys(user).length ? user.relationships.points.data : 0} indicating />
            </Menu.Item>
            <Menu.Item id='mode'>
              <Button active={active} id='toggle' onClick={this.handleModeClick}>
                <Popup
                trigger={mode_text[mode]}
                content='^ Click to switch between modes'
                inverted
                position='right center'
                />
              </Button>
            </Menu.Item>
            <Menu.Item name='last-location'>
              <p className='head'>
                Last Known Location:
                <Popup
                trigger={<Icon circular name='question circle outline' className='location_help' />}
                content='^ Here is the last location of your ship. Click to fast travel back.'
                inverted
                position='right center'
                />
              </p>
              <p><Link to={'./Starmap'} className='link-color'>Jupiter</Link></p>
            </Menu.Item>
            <Menu.Item name='beacons'>
              <p className='head'>
                Beacons:
                <Popup
                trigger={<Icon circular name='question circle outline' className='beacons_help' />}
                content='^ Here are the beacons you saved. Click to fast travel to one.'
                inverted
                position='right center'
                />
              </p>

              <p><Link to={'./Starmap'} className='link-color'>Jupiter</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Io</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Europa</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Mars</Link></p>
              <Link to='/Beacons' className='link-color'>More...</Link>
            </Menu.Item>
            <Menu.Item name='feed_link'>
              <Link to='/Profile' className='link-color'>News Feed</Link>
            </Menu.Item>
            <Menu.Item name='submissions'>
              <Link to='/Submissions' className='link-color'>Submissions</Link>
            </Menu.Item>
            <Menu.Item name='crew-lounge'>
              <Link to='/CrewLounge' className='link-color'>Crew Lounge</Link>
            </Menu.Item>
            <Menu.Item>
              <p className='starmap_link'><a href={'./Starmap'}>Return to Starmap</a></p>
            </Menu.Item>
          </Menu>
        </div>
        {this.props.children}
      </div>
    );
  }
}
