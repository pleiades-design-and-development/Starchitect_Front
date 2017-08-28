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
      title: props.match.params.object,
      image: '',
      mode: sessionStorage.getItem('mode'),
    }
  }

  componentDidMount() {
    fetch(`https://images-api.nasa.gov/search?title=${this.state.title}&media_type=image`, {
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

  render() {

    const {title, image, mode} = this.state;
    console.log(title);
    return (
      <div id='wiki_template'>
        <div className='wiki_header'>
          <img src={image} alt='Astronomical object' className='wiki_img' />
          <h2 className='wiki_title'>{title}</h2>
        </div>
        <div className='sub_bucket'>
          <div className='prose_subs'>
            {mode === 'Explorer' ? <ProseExplorerTemplate/> : <ProseCreatorTemplate/>}
          </div>
          <div className='hard_data'>
            {categories[this.state.title] === 'planet' ? <DataPlanet/> : categories[this.state.title] === 'star' ? <DataStar/> : <DataMoon/>}
          </div>
        </div>
        <div className='Here_bucket'>
          <img src={image} alt='Astronomical object' className='YouAreHere' />
        </div>
      </div>
    );
  }
}
