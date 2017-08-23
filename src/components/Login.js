import React from 'react';

import {Redirect} from 'react-router-dom';

import {Form, Input, Button, Message} from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callsign: '',
      password: '',
      redirect_profile: false,
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { callsign, password } = this.state;
    let listItem = JSON.stringify({ callsign, password });
    fetch("https://starchitect.herokuapp.com/api/v1/login", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => {
      return data.json();
    }).then(response => {
      console.log(response, "yay");
      sessionStorage.setItem('api_token', 'Token token=' + response.data.attributes['api-token']);
      sessionStorage.setItem('userId', response.data.id);
      this.setState({redirect_profile: true})
    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({ callsign: '', password:'' });
  }

  render() {
    const { callsign, password, redirect_profile } = this.state
    if (redirect_profile) {
      return <Redirect push to='/Profile'/>;
    }
    return (
      <div>
        <Form size='big' key='big' onSubmit={this.handleSubmit} id='login'>
          <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What does your squad call you?' placeholder='Callsign' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='password' type='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
          <Message
            success
            header='Form Completed'
            content="You are now enlisted in the Explorer Corps. Welcome Cadet!"
          />
          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />
          <Button type='submit'>Submit</Button>
        </Form>
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="Stars.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}
