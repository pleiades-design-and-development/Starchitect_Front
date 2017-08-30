import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'

export default class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crew: [],
      api_token: sessionStorage.getItem('api_token'),
    }
  }

  componentDidMount() {
    fetch("https://starchitect.herokuapp.com/api/v1/users", {
      method: 'GET',
      headers: {
        'Authorization': this.state.api_token,
      },
    }).then(function(data) {
      return data.json();
    }).then((response) => {
      console.log(response, "yay");
      this.setState({crew: response.data});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }


  render() {
    return (
      <div className='feedWindow'>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src='/assets/images/avatar/small/elliot.jpg' alt='user avatar'/>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='/assets/images/avatar/small/helen.jpg' alt='user avatar' />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a><img src='/assets/images/wireframe/image.png' alt='post' /></a>
                <a><img src='/assets/images/wireframe/image.png' alt='post' /></a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='/assets/images/avatar/small/jenny.jpg' alt='user avatar' />
            <Feed.Content>
              <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='/assets/images/avatar/small/joe.jpg' alt='user avatar' />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='/assets/images/avatar/small/justen.jpg' alt='user avatar' />
            <Feed.Content>
              <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a><img src='/assets/images/wireframe/image.png' alt='post' /></a>
                <a><img src='/assets/images/wireframe/image.png' alt='post' /></a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </div>
    );
  }
}
