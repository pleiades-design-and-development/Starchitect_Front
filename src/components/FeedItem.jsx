import React from 'react';
import { Feed, Icon, Button } from 'semantic-ui-react'

export default class FeedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        };
    }

    addLike = (e) => {
        e.preventDefault();
        this.setState({likes: +1});
    }

    render () {

        const {likes} = this.state;

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
                                <Button icon style={{marginRight: '2vw'}} onClick={this.addLike}><Icon name='like' /></Button>
                                {likes} Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>

                    </Feed.Event>
                </Feed>
            </div>
        )
    }
}