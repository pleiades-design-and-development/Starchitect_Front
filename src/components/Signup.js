import React from 'react';

import Starmap from './App_Starmap'

import {Form, Input, Button, Message, Loader, Dimmer } from 'semantic-ui-react';

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
      error: false,
      error_msg: '',
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({active: true})
    const {firstname, lastname, callsign, email, password, password_confirmation} = this.state;
    let listItem = JSON.stringify({ firstname, lastname, callsign, email, password, password_confirmation });
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
    this.setState({ firstname: '', lastname: '', callsign: '', email: '', password: '', password_confirmation: '' });
  }

  render() {
    const { firstname, lastname, callsign, email, password, password_confirmation, redirect_starmap, active, error, error_msg } = this.state
    if (redirect_starmap) {
      return <Redirect push to='/Starmap'/>;
    }
    return (
      <div id='signup_container'>
        <Form size='small' key='big' onSubmit={this.handleSubmit} id='signup' error={error}>
          <Form.Field id='form-input-control-firstname' name='firstname' value={firstname} control={Input} label='What is your name, cadet?' placeholder='First Name' onChange={this.handleChange} />
          <Form.Field id='form-input-control-lastname' name='lastname' value={lastname} control={Input} label='What is your family name, cadet?' placeholder='Last Name' onChange={this.handleChange} />
          <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What do they call you?' placeholder='Callsign' onChange={this.handleChange} />
          <Form.Field id='form-input-control-email' name='email' value={email} control={Input} label='How can I reach you if we have a red alert?' placeholder='Email' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='password' type='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password_confirmation' name='password_confirmation' type='password' value={password_confirmation} control={Input} label='Please confirm your high command authorization code?' placeholder='Please confirm your password' onChange={this.handleChange} />
          <Message
            color='black'
            error
            header='Houston, we have a problem!'
            content={error_msg}
          />
          <Button type='submit'>Submit</Button>
          <Dimmer active={active}>
          <Loader active={active} size='huge'>Loading</Loader>
          </Dimmer>
        </Form>
      </div>
    );
  }
}
