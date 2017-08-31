import React from 'react';
import { Feed, Icon, Button, Input } from 'semantic-ui-react'

export default class FeedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            active: null,
        };
    }

    addLike = (e) => {
        e.preventDefault();
        this.setState({likes: +1, active: 'inverted'});
    }

    render () {

        const {likes, active} = this.state;

        const {submission} = this.props; 

        return(
            <div>   
                <Feed>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='profile-imagedefault.png' alt='user avatar'/>
                        </Feed.Label>

                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User style={{color: 'white', fontWeight: '100'}}>{submission.attributes.callsign}</Feed.User> made a post from {submission.attributes["submit-object"]} as {submission.attributes["submit-type"] === "explorer" ? "an" : "a"} {submission.attributes["submit-type"]}
                            </Feed.Summary>

                            <Feed.Extra>
                                title: {submission.attributes.title}
                            </Feed.Extra>

                            <Feed.Meta>
                                <Feed.Like>
                                <Button size='mini' icon style={{marginLeft: '1vw'}} onClick={this.addLike}>{likes}  <Icon color={active} name='like outline'/></Button>
                                </Feed.Like>
                                <Input style={{marginTop: '2vh'}} transparent placeholder='Write a comment...' />
                            </Feed.Meta>
                        </Feed.Content>

                    </Feed.Event>
                </Feed>
            </div>
        )
    }
}

