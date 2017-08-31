import React from 'react';

import {Menu, Popup, Icon,  } from 'semantic-ui-react';

import {Link} from 'react-router-dom';

export default class DataPlanet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Menu vertical id='hard_data_sidebar'>
            <Menu.Item>
              <p>Year Discovered</p>
            </Menu.Item>
            <Menu.Item >
              <p>Position in Solar System:</p>
            </Menu.Item>
            <Menu.Item>
              <p>Distance from Sol:</p>
            </Menu.Item>
            <Menu.Item>
              <p>Mass:</p>
                <Popup
                content='| Click to update hard data'
                inverted
                position='left center'
                />
            </Menu.Item>
            <Menu.Item>
              <p> Diameter:
                <Popup
                trigger={<Icon circular name='question circle outline' className='location_help' />}
                content='| Here is the last location of your ship. Click to fast travel back.'
                inverted
                position='right center'
                />
              </p>
            </Menu.Item>
            <Menu.Item >
              <p>
                Orbital Period
                <Popup
                trigger={<Icon circular name='question circle outline' className='beacons_help' />}
                content='^ Here are the beacons you saved. Click to fast travel to one.'
                inverted
                position='right center'
                />
            </p>
            </Menu.Item>
            <Menu.Item>
              <p>Rotation Period</p>
            </Menu.Item>
            <Menu.Item name='submissions'>
              <p>Average Surface Temperature</p>
            </Menu.Item>
            <Menu.Item name='crew-lounge'>
              <p>'Atmosphere Primary Element'</p>
            </Menu.Item>
          </Menu>
        </div>
      </div>);
  }
}
