import React from 'react';

import {Reveal, Form, Message, Button, Dimmer, Loader, Icon, Input} from 'semantic-ui-react'

export default class ProseExplorerTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      error: '',
      error_msg: '',
      api_token: sessionStorage.getItem('api_token'),
      user_id: Number(sessionStorage.getItem('userId')),
      submit_object: props.object,
      submit_type: 'explorer',
      title: '',
      body: '',
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state[name]);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({active: true})
    console.log(this.state.object);
    const {user_id, submit_type, title, body, submit_object} = this.state;
    let listItem = JSON.stringify({ user_id, submit_type, title, body, submit_object });
    console.log(listItem);

    fetch("https://starchitect.herokuapp.com/api/v1/submissions", {
      method: "POST",
      body: listItem,
      headers: {
        'Authorization': this.state.api_token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors'
    }).then(data => {
      return data.json();
    }).then(response => {
      console.log(response, "yay");
      this.setState({ success: true });
      // this.setState({ submissions: submissions + response.? });
    }).catch(err => {
      console.log(err, "boo!");
      this.setState({ error: true, error_msg: err.errors[0].detail });
    });
    this.setState({ title: '', body: '', active: false });
  }




  render() {
    const {error, error_msg, active, success, title, body, api_token, user_id} = this.state;

    return (
      <div>
        <Form size='small' key='big' onSubmit={this.handleSubmit} id='prose_form' error={error} success={success}>
          <Form.Field id='form-input-control-title' name='title' value={title} control={Input} label='Title' onChange={this.handleChange} />
          <Form.TextArea label='Add to the Starchive!' maxLength='7000' name='body' value={body} onChange={this.handleChange} placeholder='Give us the facts, Explorer!  Tell us more about this astronomical object' />
          <Message
            style={{color: 'black'}}
            success
            header='Submission Upload Complete'
            content="Thank you for your contribution to the Starchive! You are a great addition to the Explorer Corps."
          />
          <Message
            style={{color: 'black'}}
            error
            header='Action Forbidden'
            content={error_msg}
          />
          <Button type='submit'>Submit</Button>
          <Loader inverted active={active} size='huge'>Loading</Loader>
        </Form>
        <div>
        </div>
      </div>
    );
  }
}
