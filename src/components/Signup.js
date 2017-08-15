import React from 'react';

import {Form, Input, Button, Message} from 'semantic-ui-react';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      callsign: '',
      email: '',
      password: '',
      confirm: '',
      submittedName: '',
      submittedCallsign: '',
      submittedEmail: '',
      submittedPassword: '',
      submittedConfirm: ''
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state.name);
  }

  handleSubmit = e => {
    const { name, callsign, email, password, confirm } = this.state;
    this.setState({ submittedName: name, submittedCallsign: callsign, submittedEmail: email, submittedPassword: password, submittedConfirm: confirm });
    console.log(this.state.submittedConfirm);
  }

  render() {
    const { name, callsign, email, password, confirm, submittedName, submittedCallsign, submittedEmail, submittedPassword, submittedConfirm } = this.state

    return (
      <div>
        <Form size='big' key='big'>
          <Form.Field id='form-input-control-name' name='name' value={name} control={Input} label='What is your name, cadet?' placeholder='Name' onChange={this.handleChange} />
          <Form.Field id='form-input-control-callsign' name='callsign' value={callsign} control={Input} label='What do they call you?' placeholder='Callsign' onChange={this.handleChange} />
          <Form.Field id='form-input-control-email' name='email' value={email} control={Input} label='How can I reach you if we have a red alert?' placeholder='Email' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='password' value={password} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
          <Form.Field id='form-input-control-password' name='confirm' value={confirm} control={Input} label='What is your high command authorization code?' placeholder='Password' onChange={this.handleChange} />
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
        <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}
