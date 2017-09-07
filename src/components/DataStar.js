import React from 'react';

import {Menu, Popup, Icon, Input, Reveal, Form, Button } from 'semantic-ui-react';

import {Link} from 'react-router-dom';

export default class DataPlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_token: sessionStorage.getItem('api_token'),
      user_id: Number(sessionStorage.getItem('userId')),
      submit_object: this.props.star,
      submit_type: 'Hard Data',
      submissions: [],
      year: '',
      mass: '',
      lumosity: '',
      type: '',
      age: '',
      gen: '',
      period: '',
      active: false,
    }
  }

  componentDidMount() {
    const {star} = this.props;
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
        return (submission['submit-type'] === 'Hard Data' && submission['submit-object'] === star);
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
        }if(submission.attributes.title === 'mass'){
          this.setState({mass2: submission.attributes.body})
        }if(submission.attributes.title === 'lumosity'){
          this.setState({lumosity2: submission.attributes.body})
        }if(submission.attributes.title === 'type'){
          this.setState({type2: submission.attributes.body})
        }if(submission.attributes.title === 'age'){
          this.setState({age2: submission.attributes.body})
        }if(submission.attributes.title === 'gen'){
          this.setState({gen2: submission.attributes.body})
        }if(submission.attributes.title === 'period'){
          this.setState({period2: submission.attributes.body})
        }
      })
    }).catch(err => {
      console.log(err, "boo!");
    });
  }

  onClickHandler = (e, data) => {
    e.preventDefault();
    const {star} = this.props;
    const title = data.name;
    const body = this.state[data.name];
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
            return (submission['submit-type'] === 'Hard Data' && submission['submit-object'] === star);
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
            }if(submission.attributes.title === 'mass'){
              this.setState({mass2: submission.attributes.body})
            }if(submission.attributes.title === 'lumosity'){
              this.setState({lumosity2: submission.attributes.body})
            }if(submission.attributes.title === 'type'){
              this.setState({type2: submission.attributes.body})
            }if(submission.attributes.title === 'age'){
              this.setState({age2: submission.attributes.body})
            }if(submission.attributes.title === 'gen'){
              this.setState({gen2: submission.attributes.body})
            }if(submission.attributes.title === 'period'){
              this.setState({period2: submission.attributes.body})
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
    const {year2, mass2, lumosity2, type2, age2, gen2, period2, active} = this.state;

    return (
      <div>
        <div>
          <Menu vertical id='hard_data_sidebar'>
            <Menu.Item>
              <p>Year Discovered:</p>
              <p>{year2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-year' name='year' value={year2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='year' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Mass:</p>
              <p>{mass2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-mass' name='mass' value={mass2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='mass' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Lumosity:</p>
              <p>{lumosity2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-lumosity' name='lumosity' value={lumosity2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='lumosity' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item >
              <p>Type of Star:</p>
              <p>{type2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-type' name='type' value={type2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='type' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Generation of Star:</p>
              <p>{gen2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-gen' name='gen' value={gen2} control={Input} onChange={this.handleChange} /><Button circular small icon='check circle' name='gen' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Age of the Current Star:</p>
              <p>{age2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-age' name='age' value={age2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='age' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
            <Menu.Item>
              <p>Galatic Period:</p>
              <p>{period2 || <Form className='hard_data_forms'><Form.Field className='hard_data_formfield' id='form-input-control-period' name='period' value={period2} control={Input} onChange={this.handleChange} /><Button circular icon='check circle' name='period' size='mini' onClick={this.onClickHandler}/></Form>}</p>
            </Menu.Item>
          </Menu>
        </div>
      </div>);
  }
}
