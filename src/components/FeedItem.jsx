import React from 'react';
import { Feed, Icon, Button, Input, Accordion, Form, Message } from 'semantic-ui-react'

export default class FeedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            active: null,
            comments: [],
            body: '',
            user_id: Number(sessionStorage.getItem('userId')),
            api_token: sessionStorage.getItem('api_token'),
            error: false,
            error_head: '',
            error_msg: '',
        };
    }

    addLike = (e) => {
        e.preventDefault();
        this.setState({likes: +1, active: 'purple'});
    }

    componentDidMount() {
      const {submission} = this.props;
      console.log(submission);
      const thisSubmission = submission.id;
      fetch(`https://starchitect.herokuapp.com/api/v1/submissions/${thisSubmission}/comments`, {
        method: 'GET',
        headers: {
          'Authorization': this.state.api_token,
        },
      }).then(function(data) {
        return data.json();
      }).then((response) => {
        console.log(response, "yay");
        this.setState({comments: response.data});
      }).catch(err => {
        console.log(err, "boo!");
      });
    }

    handleChange = (e, { name, value }) => {
      e.preventDefault();
      this.setState({ [name]: value });
      console.log(this.state.body);
    }

    handleEnter = (event) => {
        event.preventDefault();

        const {submission} = this.props;
        const thisSubmission = submission.id;
        const { body, user_id } = this.state;
        const commentable_id = Number(thisSubmission);
        const commentable_type = 'Submission'
        let listItem = JSON.stringify({ body, user_id, commentable_id, commentable_type });

        fetch(`https://starchitect.herokuapp.com/api/v1/submissions/${thisSubmission}/comments`, {
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
            fetch(`https://starchitect.herokuapp.com/api/v1/submissions/${thisSubmission}/comments`, {
              method: 'GET',
              headers: {
                'Authorization': this.state.api_token,
              },
            }).then(function(data) {
              return data.json();
            }).then((response) => {
              console.log(response, "yay");
              this.setState({comments: response.data});
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
        this.setState({ body: ''});
    }


    render () {

        const {likes, active, comments, body, error, error_head, error_msg} = this.state;

        const {submission} = this.props;

        return(
            <div>
                <Feed>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='profile-imagedefault.png' alt='user avatar'/>
                        </Feed.Label>

                        <Feed.Content>
                            <Feed.Summary id='feed_summary'>
                                <Feed.User style={{color: 'white', fontWeight: '100'}}>{submission.attributes.callsign}</Feed.User> made a post from {submission.attributes["submit-object"]} as {submission.attributes["submit-type"] === "Explorer" || "explorer" ? "an" : "a"} {submission.attributes["submit-type"]}
                            </Feed.Summary>

                            <Feed.Extra>
                                <Accordion>
                                    <Accordion.Title id='feed_title'>
                                        <Icon name='dropdown' />
                                        {submission.attributes.title}
                                    </Accordion.Title>

                                    <Accordion.Content id='feed_content'>
                                        <p>
                                            {submission.attributes.body}
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Feed.Extra>

                            <Feed.Meta>
                                <div className='comment_box'>
                                  <Feed.Like>
                                    <Button size='mini' icon style={{marginLeft: '1vw'}} onClick={this.addLike}>{likes} <Icon color={active} name='like outline'/></Button>
                                  </Feed.Like>
                                  <Form onSubmit={this.handleEnter} className='comment_form' error={error}>
                                    <Form.Field style={{marginTop: '2vh'}} id='form-input-control-body' name='body' value={body} control={Input} transparent placeholder='Write a comment...' onChange={this.handleChange}/>
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
                                  <Button type='submit' icon='check circle' id='comment_submit'></Button>
                                  </Form>
                                </div>
                                <Accordion style={{color: 'white'}}>
                                    <Accordion.Title id='comment_title' style={{color: 'white'}}>
                                        <Icon name='dropdown' />
                                        <span>See all comments...</span>
                                    </Accordion.Title>

                                    <Accordion.Content id='comment_content'>
                                        {comments.map((comment, index) => (
                                          <p key={index}>{comment.attributes.body}</p>
                                        ))}
                                    </Accordion.Content>
                                </Accordion>
                            </Feed.Meta>
                      </Feed.Content>

                    </Feed.Event>
                </Feed>
            </div>
        )
    }
}
