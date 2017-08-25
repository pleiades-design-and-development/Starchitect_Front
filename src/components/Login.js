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
      error: false,
      error_msg: '',
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
      if(response.errors){
        this.setState({ error_msg: response.errors[0].detail || ''})
        this.setState({ error: true})
      } else{
        sessionStorage.setItem('api_token', 'Token token=' + response.data.attributes['api-token']);
        sessionStorage.setItem('userId', response.data.id);
        this.setState({redirect_profile: true})
      }
    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({ callsign: '', password:'' });
  }

  render() {
    const { callsign, password, redirect_profile, error, error_msg } = this.state
    if (redirect_profile) {
      return <Redirect push to='/Profile'/>;
    }
    return (
      <div>
        <Form size='big' key='big' onSubmit={this.handleSubmit} id='login' error={error}>
          <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What does your squad call you?' placeholder='Callsign' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='password' type='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
          <Message
            color='black'
            error
            header='Houston, we have a problem!'
            content={error_msg}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}
