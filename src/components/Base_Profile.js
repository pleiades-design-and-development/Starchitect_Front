import React from 'react';

import { Input, Label, Menu, Progress, Button, Popup, Icon } from 'semantic-ui-react'

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
    }
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
    const {mode, active} = this.state;

    return (
      <div className='profile-container'>
        <div id='sidebar' style={{width: '20vw', height: '100vh'}}>

          <Menu vertical id='menu'>
            <img src='profile-image.jpeg' alt='profile image' className='profile_image'/>
            <p>Brandon Stark</p>
            <Menu.Item name='rank' id='rank'>
              <img src='cadetBadge.svg' alt='rank badge'/>
              <p style={{marginTop: '2px', marginLeft: '5px'}}>CADET</p>
            </Menu.Item>
            <Menu.Item name='progress-bar' id='progress_bar'>
              <Progress percent='35' indicating />
            </Menu.Item>
            <Menu.Item id='mode'>
              <Button active={active} id='toggle' onClick={this.handleModeClick}>
                <Popup
                trigger={mode_text[mode]}
                content='^ Click to switch between modes'
                inverted
                position='right'
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
                position='right'
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
                position='right'
                />
              </p>

              <p><Link to={'./Starmap'} className='link-color'>Jupiter</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Io</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Europa</Link></p>
              <p><Link to={'./Starmap'} className='link-color'>Mars</Link></p>
              <Link to='/Beacons' className='link-color'>More...</Link>
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
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="Stars.mp4" type="video/mp4"/>
          </video>
        </div>
        {this.props.children}
      </div>
    );
  }
}
