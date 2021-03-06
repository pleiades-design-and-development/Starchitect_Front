import React from 'react';

import {Reveal, Form, Message, Button, Dimmer, Loader, Icon, Input, Accordion} from 'semantic-ui-react'

export default class ProseExplorerTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      error: false,
      error_head: '',
      error_msg: '',
      api_token: sessionStorage.getItem('api_token'),
      user_id: Number(sessionStorage.getItem('userId')),
      submit_object: this.props.explorer,
      submit_type: 'Explorer',
      title: '',
      body: '',
      submissions: [],
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({active: true})
    const {explorer} = this.props;
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
    }).then(purple => {
      if(purple.status === 403){
        this.setState({ error: true, error_head: `Error ${purple.status}`, error_msg: purple.statusText });
      }if(purple.status === 404){
        this.setState({ error: true, error_head: `Error ${purple.status}`, error_msg: purple.statusText });
      }if(purple.status >= 400){
        this.setState({ error: true, error_head: `Error ${purple.status}`, error_msg: 'Sorry, we are having technical difficulties. Try again.' });
      }if(purple.status > 300 && purple.status < 400){
        this.setState({ error: true, error_head: `Error ${purple.status}`, error_msg: "We can't accept that type of submission here. Please try again." });
      }if(purple.status < 300){
        this.setState({ success: true });
        fetch('https://starchitect.herokuapp.com/api/v1/submissions/', {
          method: 'GET',
          headers: {
            'Authorization': this.state.api_token,
          },
        }).then(function(data) {
          return data.json();
        }).then((response) => {
          console.log(response, "yay");
          const submissions = response.data;
          function isFromObject(submission) {
            return (submission['submit-type'] === 'Explorer' && submission['submit-object'] === explorer);
          }

          function filterByID(item) {
            if (isFromObject(item.attributes)) {
              return true;
            }
            return false;
          }

          var filteredData = submissions.filter(filterByID);

          this.setState({submissions: filteredData});
        }).catch(err => {
          console.log(err, "boo!");
        });
      }
      return purple;
    }).then(data => {
      return data.json();
    }).then(response => {
    }).catch(err => {
      this.setState({ error: true, error_msg: err.errors[0].detail });
    });
    this.setState({ title: '', body: '', active: false });
  }

  componentDidMount() {
    const {explorer} = this.props;
    fetch('https://starchitect.herokuapp.com/api/v1/submissions/', {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      const submissions = response.data;
      function isFromObject(submission) {
        return (submission['submit-type'] === 'Explorer' && submission['submit-object'] === explorer);
      }

      function filterByID(item) {
        if (isFromObject(item.attributes)) {
          return true;
        }
        return false;
      }

      var filteredData = submissions.filter(filterByID);

      this.setState({submissions: filteredData});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {
    const {error, error_head, error_msg, active, success, title, body, api_token, user_id, submissions} = this.state;

    const panels = [];

    submissions.map((submission, index) => {
      panels.push({title: submission.attributes.title, content: submission.attributes.body, key: String(index)})
    })

    return (
      <div>
        <Form size='small' key='big' onSubmit={this.handleSubmit} id='prose_form' error={error} success={success}>
          <Form.Field id='form-input-control-title' name='title' value={title} control={Input} label='Title' onChange={this.handleChange} />
          <Form.TextArea label='Add to the Starchive!' maxLength='7000' name='body' value={body} onChange={this.handleChange} placeholder='Give us the facts, Explorer!  Tell us more about this astronomical object' />
          <Message style={{color: 'black'}} success>
            <Message.Header>'Submission Upload Complete'</Message.Header>
            <Message.Content>'Thank you for your contribution to the Starchive! You are a great addition to the Explorer Corps.'</Message.Content>
          </Message>
          <Message style={{color: 'black'}} error>
            <Message.Header>{error_head}</Message.Header>
            <Message.Content>{error_msg}</Message.Content>
          </Message>
          <Button type='submit'>Submit</Button>
          <Loader inverted active={active} size='huge'>Loading</Loader>
        </Form>
        <div>
          <Accordion panels={panels} fluid inverted styled exclusive={false} id='submission_accordion'>
          </Accordion>
        </div>
      </div>
    );
  }
}
