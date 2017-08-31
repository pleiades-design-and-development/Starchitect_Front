import React from 'react';
import SubmissionItem from './FeedItem.jsx';
import { Feed, Icon } from 'semantic-ui-react'

export default class FeedPage extends React.Component {
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
      submit_type: 'explorer',
      title: '',
      body: '',
      submissions: [],
    }
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
      this.setState({submissions: response.data.filter(submission => {
        return !(submission.attributes.submit_type === 'explorer' && submission.attributes.submit_object === this.props.explorer);
      })});
      console.log(this.state.submissions);
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {
    const {error, error_head, error_msg, active, success, title, body, api_token, user_id, submissions} = this.state;

    return (
      <div className='feedWindow'>
        <br/>
        <h3 style={{color: 'white', fontWeight: '100'}}>Welcome Cadet, here's a list of your contributions to the core</h3>
          {submissions.map((submission, index) => <SubmissionItem submission={submission} key={index}/>)}
      </div>
    );
  }
}
