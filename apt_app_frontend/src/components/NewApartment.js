import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button,
  Alert,
  HelpBlock
} from 'react-bootstrap';
import '../css/NewApartment.css';

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        name: '',
        phone_number: '',
        contact_hours: '',
        avatar_base: null
      },
      apiUrl: "http://localhost:3000",
      apartments: [],
      newApartmentSuccess: false,
      errors: null
    }
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`${this.state.apiUrl}/apartments`,
      {
        body: JSON.stringify({apartment: this.state.form}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse) => {
      return Promise.all([rawResponse.status, rawResponse.json()])
    })
    .then((parsedResponse) => {
      if (parsedResponse[0] === 422) {
        this.setState({errors: parsedResponse[1]})
      } else {
        const apartments = Object.assign([], this.state.apartments)
        apartments.push(parsedResponse[1])
        this.setState({
          apartments: apartments,
          errors: null,
          newApartmentSuccess: true
        });
      }
    });
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  fileChangeHandler(event){
    const file = event.target.files[0]
    this.getBase64(file).then( (fileString) => {
      const formState = Object.assign({}, this.state.form)
      formState.avatar_base = fileString
      this.setState({form: formState})
    })
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors && this.props.errors[attribute]){
      const errors = this.props.errors[attribute]
      if(errors){
        errorString = errors.join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1 className = "title">New Apartment</h1>
          <form onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Street 1"
              name="street_1"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.street_1}
            />
            <input
              className="form-item"
              placeholder="Street 2"
              name="street_2"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.street_2}
            />
            <input
              className="form-item"
              placeholder="City"
              name="city"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.city}
            />
            <input
              className="form-item"
              placeholder="State"
              name="state"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.state}
            />
            <input
              className="form-item"
              placeholder="Postal Code"
              name="postal_code"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.postal_code}
            />
            <input
              className="form-item"
              placeholder="Country"
              name="country"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.country}
            />
            <input
              className="form-item"
              placeholder="Contact Name"
              name="name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            <input
              className="form-item"
              placeholder="Contact Phone Number"
              name="phone_number"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.phone_number}
            />
            <input
              className="form-item"
              placeholder="Contact Hours"
              name="contact_hours"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.contact_hours}
            />
            <input
              type="file"
              onChange={this.fileChangeHandler.bind(this)}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>

        { this.state.newApartmentSuccess && <Redirect to='/apartments' /> }
      </div>
    );
  }
}

export default NewApartment
