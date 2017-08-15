import React from 'react';
import { Redirect } from 'react-router';
import {Button} from 'semantic-ui-react';

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect_signup: false,
      redirect_login: false
    }
  }

  handleOnClickSignup = () => {
    this.setState({redirect_signup: true});
  }
  handleOnClickLogin = () => {
    this.setState({redirect_login: true});
  }

  render() {
    if (this.state.redirect_signup) {
      return <Redirect push to='/Signup' />;
    }
    if (this.state.redirect_login) {
      return <Redirect push to='/Login' />;
    }
    return (
      <div>
        <h1>STARCHITECT</h1>
          <Button animated='fade' onClick={this.handleOnClickSignup}>
            <Button.Content visible>Start Exploring, Enlist!</Button.Content>
            <Button.Content hidden>Sign Up!</Button.Content>
          </Button>

          <Button animated='fade' onClick={this.handleOnClickLogin}>
            <Button.Content visible>Your team is waiting for you!</Button.Content>
            <Button.Content hidden>Log In!</Button.Content>
          </Button>
      </div>
    );
  }
}
