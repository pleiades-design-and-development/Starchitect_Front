import React from 'react';

import {Menu, Popup, Icon, Input, Reveal } from 'semantic-ui-react';

import {Link} from 'react-router-dom';

export default class DataPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
      year: '',
      position: 'Northwest',
      distance: '',
      mass: '',
      diameter: '',
      orbital: '',
      rotational: '',
      temp: '',
      element: '',
      active: false,
    }
  }

  componentDidMount() {
    const {planet} = this.props;
    fetch('https://starchitect.herokuapp.com/api/v1/submissions/', {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      const submissions = response.data;
      function isFromObject(submission) {
        return (submission['submit-type'] === 'Hard Data' && submission['submit-object'] === planet);
      }
      function filterByID(item) {
        if (isFromObject(item.attributes)) {
          return true;
        }
        return false;
      }
      var filteredData = submissions.filter(filterByID);
      this.setState({submissions: filteredData});
      submissions.map((submission, index) => {
        if(submission.attributes.title === 'year'){
          this.setState({year: submission.attributes.body})
        }if(submission.attributes.title === 'position'){
          this.setState({position: submission.attributes.body})
        }if(submission.attributes.title === 'distance'){
          this.setState({distance: submission.attributes.body})
        }if(submission.attributes.title === 'mass'){
          this.setState({mass: submission.attributes.body})
        }if(submission.attributes.title === 'diameter'){
          this.setState({diameter: submission.attributes.body})
        }if(submission.attributes.title === 'orbital'){
          this.setState({orbital: submission.attributes.body})
        }if(submission.attributes.title === 'rotational'){
          this.setState({rotational: submission.attributes.body})
        }if(submission.attributes.title === 'temp'){
          this.setState({temp: submission.attributes.body})
        }if(submission.attributes.title === 'element'){
          this.setState({element: submission.attributes.body})
        }
      })
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  onClickHandler = (e) => {
    this.setState({active: !this.state.active})
  }

  render() {
    const {year, position, distance, mass, diameter, orbital, rotational, temp, element, active} = this.state;

    return (
      <div>
        <div>
          <Menu vertical id='hard_data_sidebar'>
            <Menu.Item onClick={this.onClickHandler}>
              <p>Year Discovered:</p>
              <p>{year}</p>
            </Menu.Item>
            <Menu.Item >
              <p>Position in Solar System:</p>
              <p>{position}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Distance from Sol:</p>
              <p>{distance}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Mass:</p>
              <p>{mass}
                <Popup
                content='| Click to update hard data'
                inverted
                position='left center'
                />
              </p>
              <input />
            </Menu.Item>
            <Menu.Item>
              <p>Diameter:</p>
              <p>{diameter}
                <Popup
                trigger={<Icon circular name='question circle outline' className='location_help' />}
                content='| Here is the last location of your ship. Click to fast travel back.'
                inverted
                position='right center'
                />
              </p>
            </Menu.Item>
            <Menu.Item >
              <p>Orbital Period</p>
              <p>{orbital}
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
              <p>{rotational}
                <Popup
                trigger={<Icon circular name='question circle outline' className='beacons_help' />}
                content='^ Here are the beacons you saved. Click to fast travel to one.'
                inverted
                position='right center'
                />
              </p>
            </Menu.Item>
            <Menu.Item name='submissions'>
              <p>Average Surface Temperature</p>
              <p>{temp}
                <Popup
                trigger={<Icon circular name='question circle outline' className='beacons_help' />}
                content='^ Here are the beacons you saved. Click to fast travel to one.'
                inverted
                position='right center'
                />
              </p>
            </Menu.Item>
            <Menu.Item name='crew-lounge'>
              <p>'Atmosphere Primary Element'</p>
              <p>{element}
                <Popup
                trigger={<Icon circular name='question circle outline' className='beacons_help' />}
                content='^ Here are the beacons you saved. Click to fast travel to one.'
                inverted
                position='right center'
                />
              </p>
            </Menu.Item>
          </Menu>
        </div>
      </div>);
  }
}
