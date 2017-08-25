import React from 'react';

import {Redirect} from 'react-router-dom';

const myAcceptableParameters = ['Jupiter', 'Earth', 'Sun', 'Mars', 'Mercury', 'Venus', 'Uranus', 'Neptune']

export default class Wiki_Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.match.params.object,
      image: '',
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
    if(this.title && !(this.title in myAcceptableParameters)){
      return <Redirect to="/NoMatch"/>;
    }

    const {title, image} = this.state;
    console.log(title);
    return (
      <div id='wiki_template'>
        <div className='wiki_header'>
          <img src={image} alt='Astronomical object' className='wiki_img' />
          <h2 className='wiki_title'>{title}</h2>
        </div>
        <div className='sub_bucket'>
          <div className='prose_subs'>
            here is where the prose is
          </div>
          <div className='hard_data'>
            here is where the hard data stats are
          </div>
        </div>
        <div className='Here_bucket'>
          <img src={image} alt='Astronomical object' className='YouAreHere' />
        </div>
      </div>
    );
  }
}
