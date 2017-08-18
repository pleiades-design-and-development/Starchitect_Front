import React from 'react';

import { Input, Label, Menu, Progress, Button } from 'semantic-ui-react'

import {Link} from 'react-router-dom';

export default class Base_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='profile-container'>
        <div id='sidebar' style={{width: '20vw', height: '100vh;'}}>
          <Menu vertical id='menu'>
            <img src='profile-image.jpeg' alt='profile image' className='profile-image'/>
            <p>Brandon Stark</p>
            <Menu.Item name='rank' id='rank'>
              <img src='cadetBadge.svg' alt='rank badge'/>
              <p style={{marginTop: '2px', marginLeft: '5px'}}>CADET</p>
            </Menu.Item>
            <Menu.Item name='progress-bar' id='progress-bar'>
              <Progress percent='35' indicating />
            </Menu.Item>
            <Menu.Item id='mode'>
              <Button>Explorer Mode</Button>
              <Button>Creator Mode</Button>
            </Menu.Item>
            <Menu.Item name='last-location'>
              <p className='head'>Last Known Location:</p>
              <p>Jupiter</p>
            </Menu.Item>
            <Menu.Item name='beacons'>
              <p className='head'>Beacons:</p>
              <p><Link to={'./Starmap'}>Jupiter</Link></p>
              <p><Link to={'./Starmap'}>Io</Link></p>
              <p><Link to={'./Starmap'}>Europa</Link></p>
              <p><Link to={'./Starmap'}>Mars</Link></p>
              <Link to='/Beacons' className='link-color'>More...</Link>
            </Menu.Item>
            <Menu.Item name='submissions'>
              <Link to='/Submissions' className='link-color'>Submissions</Link>
            </Menu.Item>
            <Menu.Item name='crew-lounge'>
              <Link to='' className='link-color'>Crew Lounge</Link>
            </Menu.Item>
            <Menu.Item>
              <Button><a href={'./Starmap'}>Return to Starmap</a></Button>
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
