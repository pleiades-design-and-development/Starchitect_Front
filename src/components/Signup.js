import React from 'react';

import Starmap from './App_Starmap'

import {Form, Input, Button, Message, Loader, Dimmer, Grid, Image } from 'semantic-ui-react';

import {Redirect} from 'react-router-dom';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      callsign: '',
      email: '',
      password: '',
      password_confirmation: '',
      redirect_starmap: false,
      active: false,
      avatar: '',
      imagePreviewUrl: ''
    }
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatar: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({active: true})
    const {firstname, lastname, callsign, email, password, password_confirmation, avatar} = this.state;
    let listItem = JSON.stringify({ firstname, lastname, callsign, email, password, password_confirmation});
    console.log(listItem);

    fetch("https://starchitect.herokuapp.com/api/v1/signup", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(data => {
      return data.json();
    }).then(response => {
      console.log(response, "yay");
      sessionStorage.setItem('api_token', 'Token token=' + response.data.attributes['api-token']);
      sessionStorage.setItem('userId', response.data.id);
      sessionStorage.setItem('mode', 'Explorer');
      sessionStorage.setItem('beacons', []);
      this.setState({ redirect_starmap: true });
    }).catch(err => {
      console.log(err, "boo!");
      this.setState({ error: err.errors[0].detail || ''});
      this.setState({ error: err.email[0] || ''})
    });
    this.setState({ firstname: '', lastname: '', callsign: '', email: '', password: '', password_confirmation: '', avatar: '', imagePreviewUrl: '' });
  }

  render() {
    const { firstname, lastname, callsign, email, password, password_confirmation, redirect_starmap, active, avatar, imagePreviewUrl } = this.state

    if (redirect_starmap) {
      return <Redirect push to='/Starmap'/>;
    }
    let imageSrc = null;

    if (imagePreviewUrl) {
      imageSrc = (imagePreviewUrl);
    } else {
      imageSrc = ('profile-imagedefault.png');
    }
    console.log(avatar);
    return (
      <div>
      <Form size='small' key='big' onSubmit={this.handleSubmit} id='signup'>
      <Grid stackable padded>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <div id='signup_container'>
                <Form.Field id='form-input-control-firstname' name='firstname' value={firstname} control={Input} label='What is your name, cadet?' placeholder='First Name' onChange={this.handleChange} />
                <Form.Field id='form-input-control-lastname' name='lastname' value={lastname} control={Input} label='What is your family name, cadet?' placeholder='Last Name' onChange={this.handleChange} />
                <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What do they call you?' placeholder='Callsign' onChange={this.handleChange} />
                <Form.Field id='form-input-control-email' name='email' value={email} control={Input} label='How can I reach you if we have a red alert?' placeholder='Email' onChange={this.handleChange} />
                <Form.Field id='form-input-control-password' name='password' type='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
                <Form.Field id='form-input-control-password_confirmation' name='password_confirmation' type='password' value={password_confirmation} control={Input} label='Please confirm your high command authorization code?' placeholder='Please confirm your password' onChange={this.handleChange} />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div id='signup_container2'>
                <label htmlFor="avatar">Choose an Avatar:</label>
                <Input fluid type='file' name='avatar' size='mini' onChange={(e)=>this._handleImageChange(e)}/>
                <Image centered src={imageSrc} size='medium' shape='circular' />
                <Message
                  color='black'
                  error
                  header='Houston, we have a problem!'
                />
                <Dimmer active={active}>
                <Loader active={active} size='huge'>Loading</Loader>
                </Dimmer>
            </div>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Button fluid type='submit'>Submit</Button>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
      </Form>
      </div>
    );
  }
}
