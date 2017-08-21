import React from 'react';
import {Redirect} from 'react-router';
import {Button} from 'semantic-ui-react';
import logo from '../starchitectLogo.svg'

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
      return <Redirect push to='/Signup'/>;
    }
    if (this.state.redirect_login) {
      return <Redirect push to='/Login'/>;
    }
    return (
      <div className='splash'>
        <div className='splash_container'>
          <div className='centered_logo'>
              <img src={logo} alt='Starchitect logo' className='logo' />
          </div>
          <div className='centered_buttons' style={{textAlign: 'center'}}>
            <Button style={{marginBottom: '1em'}} size='medium' animated='fade' onClick={this.handleOnClickSignup}>
              <Button.Content visible>Start Exploring, Enlist!</Button.Content>
              <Button.Content hidden>Sign Up!</Button.Content>
            </Button>
            <Button style={{marginBottom: '1em'}} size='medium' animated='fade' onClick={this.handleOnClickLogin}>
              <Button.Content visible>Your team is waiting for you!</Button.Content>
              <Button.Content hidden>Log In!</Button.Content>
            </Button>
          </div>
        </div>
        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src="Stars.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    )
  }
}
