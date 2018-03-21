import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
      },
      apiUrl: "http://localhost:3000",
      newUserSuccess: false
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetch(`${this.state.apiUrl}/new_user`,
      {
        body: JSON.stringify(this.state.form),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse)=>{
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) =>{
      if (parsedResponse[0] === 422) {
        this.setState({errors: parsedResponse[1]})
      } else {
        this.setState({
          errors: null,
          newUserSuccess: true
        });
      }
    });
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Register</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Email Address"
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.email}
            />
            <input
              className="form-item"
              placeholder="Name"
              name="name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.password}
            />
            <input
              className="form-item"
              placeholder="Confirm Password"
              name="password_confirmation"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.password_confirmation}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
        {this.state.newUserSuccess && <Redirect to='/apartments' />}
      </div>
    );
  }
}
