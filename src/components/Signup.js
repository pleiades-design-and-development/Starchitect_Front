import React from 'react';

import {Form, Input, Button, Message} from 'semantic-ui-react';

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
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);
    console.log(listItem);

    fetch("https://starchitect.herokuapp.com/api/v1/users", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({firstname: '', lastname: '', callsign: '', email: '', password: '', password_confirmation: ''});

  }

  render() {
    const { firstname, lastname, callsign, email, password, password_confirmation } = this.state

    return (
      <div id='signup_container'>
        <Form size='big' key='big' onSubmit={this.handleSubmit} id='signup'>
          <Form.Field id='form-input-control-firstname' name='firstname' value={firstname} control={Input} label='What is your name, cadet?' placeholder='First Name' onChange={this.handleChange} />
          <Form.Field id='form-input-control-lastname' name='lastname' value={lastname} control={Input} label='What is your family name, cadet?' placeholder='Last Name' onChange={this.handleChange} />
          <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What do they call you?' placeholder='Callsign' onChange={this.handleChange} />
          <Form.Field id='form-input-control-email' name='email' value={email} control={Input} label='How can I reach you if we have a red alert?' placeholder='Email' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='password' type='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password_confirmation' name='password_confirmation' type='password' value={password_confirmation} control={Input} label='Please confirm your high command authorization code?' placeholder='Please confirm your password' onChange={this.handleChange} />
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
