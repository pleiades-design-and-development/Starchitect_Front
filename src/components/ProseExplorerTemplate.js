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
    }).then(purple => {
      console.log(purple);
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
          this.setState({submissions: response.data});
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
        console.log(submission);
        return (submission.attributes.submit_type === 'Explorer' && submission.attributes.submit_object === this.props.explorer);
      }

      function filterByID(item) {
        if (isFromObject(item.id)) {
          return true;
        }
        return false;
      }

      var filteredData = submissions.filter(filterByID);

      console.log('Filtered Array\n', filteredData);

      this.setState({submissions: filteredData});
      console.log('Submissions in state\n', this.state.submissions);
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {
    const {error, error_head, error_msg, active, success, title, body, api_token, user_id, submissions} = this.state;

    const panels = [];

    submissions.map((submission, index) => {
      panels.push({title: submission.attributes.title, content: submission.attributes.body, key: index})
    })

    console.log(this.props.explorer);

    return (
      <div>
        <Form size='small' key='big' onSubmit={this.handleSubmit} id='prose_form' error={error} success={success}>
          <Form.Field id='form-input-control-title' name='title' value={title} control={Input} label='Title' onChange={this.handleChange} />
          <Form.TextArea label='Add to the Starchive!' maxLength='7000' name='body' value={body} onChange={this.handleChange} placeholder='Give us the facts, Explorer!  Tell us more about this astronomical object' />
          <Message
            style={{color: 'black'}}
            success
            header='Submission Upload Complete'
            content='Thank you for your contribution to the Starchive! You are a great addition to the Explorer Corps.'
          />
          <Message
            style={{color: 'black'}}
            error
            header={error_head}
            content={error_msg}
          />
          <Button type='submit'>Submit</Button>
          <Loader inverted active={active} size='huge'>Loading</Loader>
        </Form>
        <div>
          <Accordion panels={panels} fluid inverted styled exclusive={false} className='submission_accordion'>
          </Accordion>
        </div>
      </div>
    );
  }
}
