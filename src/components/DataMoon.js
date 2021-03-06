import React from 'react';

import {Menu, Popup, Icon, Input, Reveal, Form, Button } from 'semantic-ui-react';

import {Link} from 'react-router-dom';

export default class DataPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_token: sessionStorage.getItem('api_token'),
      user_id: Number(sessionStorage.getItem('userId')),
      submit_object: this.props.moon,
      submit_type: 'Hard Data',
      submissions: [],
      year: '',
      parent: '',
      orbital: '',
      mass: '',
      diameter: '',
      temp: '',
      element: '',
      active: false,
    }
  }

  componentDidMount() {
    const {moon} = this.props;
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
        return (submission['submit-type'] === 'Hard Data' && submission['submit-object'] === moon);
      }
      function filterByID(item) {
        if (isFromObject(item.attributes)) {
          return true;
        }
        return false;
      }
      var filteredData = submissions.filter(filterByID);
      this.setState({submissions: filteredData});
      this.state.submissions.map((submission, index) => {
        if(submission.attributes.title === 'year'){
          this.setState({year2: submission.attributes.body})
        }if(submission.attributes.title === 'parent'){
          this.setState({parent2: submission.attributes.body})
        }if(submission.attributes.title === 'orbital'){
          this.setState({orbital2: submission.attributes.body})
        }if(submission.attributes.title === 'mass'){
          this.setState({mass2: submission.attributes.body})
        }if(submission.attributes.title === 'diameter'){
          this.setState({diameter2: submission.attributes.body})
        }if(submission.attributes.title === 'temp'){
          this.setState({temp2: submission.attributes.body})
        }if(submission.attributes.title === 'element'){
          this.setState({element2: submission.attributes.body})
        }
      })
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  onClickHandler = (e, data) => {
    e.preventDefault();
    const {moon} = this.props;
    const title = data.name;
    console.log(data);
    console.log(title);
    const body = this.state[data.name];
    console.log(body);
    const {user_id, submit_type, submit_object} = this.state;
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
            return (submission['submit-type'] === 'Hard Data' && submission['submit-object'] === moon);
          }
          function filterByID(item) {
            if (isFromObject(item.attributes)) {
              return true;
            }
            return false;
          }
          var filteredData = submissions.filter(filterByID);
          this.setState({submissions: filteredData});
          console.log(this.state.submissions);
          this.state.submissions.map((submission, index) => {
            if(submission.attributes.title === 'year'){
              this.setState({year2: submission.attributes.body})
            }if(submission.attributes.title === 'parent'){
              this.setState({parent2: submission.attributes.body})
            }if(submission.attributes.title === 'orbital'){
              this.setState({orbital2: submission.attributes.body})
            }if(submission.attributes.title === 'mass'){
              this.setState({mass2: submission.attributes.body})
            }if(submission.attributes.title === 'diameter'){
              this.setState({diameter2: submission.attributes.body})
            }if(submission.attributes.title === 'temp'){
              this.setState({temp2: submission.attributes.body})
            }if(submission.attributes.title === 'element'){
              this.setState({element2: submission.attributes.body})
            }
          })
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
    this.setState({ title: '' });
  }


  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    const {year2, parent2, orbital2, mass2, diameter2, temp2, element2, active} = this.state;

    return (
      <div>
        <div>
          <Menu vertical id='hard_data_sidebar'>
            <Menu.Item>
              <p>Year Discovered:</p>
              <p>{year2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-year' name='year' value={year2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='year' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Parent Planet:</p>
              <p>{parent2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-parent' name='parent' value={parent2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='parent' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item >
              <p>Orbital Period</p>
              <p>{orbital2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-orbital' name='orbital' value={orbital2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='orbital' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Mass:</p>
              <p>{mass2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-mass' name='mass' value={mass2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='mass' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Diameter:</p>
              <p>{diameter2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-diameter' name='diameter' value={diameter2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='diameter' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Average Surface Temperature</p>
              <p>{temp2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-temp' name='temp' value={temp2} control={Input} onChange={this.handleChange} /><Button circular small icon='check circle' name='temp' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Atmosphere Primary Element</p>
              <p>{element2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-element' name='element' value={element2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='element' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
          </Menu>
        </div>
      </div>);
  }
}
