import React from 'react';

import {Redirect} from 'react-router-dom';

import ProseExplorerTemplate from './ProseExplorerTemplate';
import ProseCreatorTemplate from './ProseCreatorTemplate';
import DataPlanet from './DataPlanet';
import DataStar from './DataStar';
import DataMoon from './DataMoon';

const categories = {'Jupiter':'planet', 'Earth':'planet', 'Sol':'star', 'Mars':'planet', 'Mercury':'planet', 'Venus':'planet', 'Uranus':'planet', 'Neptune':'planet', 'Saturn':'planet', 'Moon':'moon'}

export default class Wiki_Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: props.match.params.object,
      image: '',
      mode: sessionStorage.getItem('mode'),
      beacons: sessionStorage.getItem('beacons'),
    }
  }

  componentDidMount() {
    fetch(`https://images-api.nasa.gov/search?title=${this.state.object}&media_type=image`, {
      method: 'GET',
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({image: response.collection.items[0].links[0].href});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  handleBeaconClick = () => {

  }

  render() {

    const {object, image, mode} = this.state;
    console.log(object);
    return (
      <div id='wiki_template'>
        <div className='wiki_header'>
          <img src={image} alt='Astronomical object' className='wiki_img' />
          <h2 className='wiki_title'>{object}</h2>
          <svg
            width='95vw'
            height='30vh'
            viewBox="0 0 2620 601"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onClick = {this.handleBeaconClick}
          >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Artboard">
            <g id="Group" transform="translate(552.000000, 271.000000)">
            <path d="M189.703125,110.5 L190,110.5 L190,75.8798283 L95,0 L0,75.8798283 L0,110.5 L0.296875,110.5 L95,34.8572961 L189.703125,110.5 Z" id="Combined-Shape1" fill="#222034" ></path>
            <path d="M189.703125,165.75 L190,165.75 L190,131.129828 L95,55.25 L0,131.129828 L0,165.75 L0.296875,165.75 L95,90.1072961 L189.703125,165.75 Z" id="Combined-Shape2" fill="#3F3F74"></path>
            <path d="M189.703125,221 L190,221 L190,186.379828 L95,110.5 L0,186.379828 L0,221 L0.296875,221 L95,145.357296 L189.703125,221 Z" id="Combined-Shape3" fill="#76428A"></path>
            </g>
            <polygon id="Triangle-2" stroke="#C9C8D1" strokeWidth="5" points="647 138 872 518 422 518"></polygon>
            </g>
            </g>
          </svg>
        </div>
        <div className='sub_bucket'>
          <div className='prose_subs'>
            {mode === 'Explorer' ? <ProseExplorerTemplate object={this.state.object}/> : <ProseCreatorTemplate object={this.state.object}/>}
          </div>
          <div className='hard_data'>
            {categories[this.state.object] === 'planet' ? <DataPlanet object={this.state.object}/> : categories[this.state.object] === 'star' ? <DataStar object={this.state.object}/> : <DataMoon object={this.state.object}/>}
          </div>
        </div>
        <div className='Here_bucket'>
          <img src={image} alt='Astronomical object' className='YouAreHere' />
        </div>
      </div>
    );
  }
}
