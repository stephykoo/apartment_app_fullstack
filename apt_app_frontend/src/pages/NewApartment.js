import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button
} from 'react-bootstrap'

class NewApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
        name: '',
        phone_number: '',
        contact_hours: '',
      }
    }
  }

  handleChange(event){
  const formState = Object.assign({}, this.state.form)
  formState[event.target.name] = event.target.value
  this.setState({form: formState})
  }

  render() {
  return (
    <form>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="street_1">Street_1</ControlLabel>
            <FormControl
            type="text"
            name="street_1"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.street_1} />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="street_2">Street_2</ControlLabel>
            <FormControl
            type="text"
            name="street_2"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.street_2} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="city">City</ControlLabel>
            <FormControl
            type="text"
            name="city"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.city} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="state">State</ControlLabel>
            <FormControl
            type="text"
            name="state"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.state} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="postal_code">Postal_Code</ControlLabel>
            <FormControl
            type="text"
            name="postal_code"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.postal_code} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="country">Country</ControlLabel>
            <FormControl
            type="text"
            name="country"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.country} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="name">Name</ControlLabel>
            <FormControl
            type="text"
            name="name"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.name} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="phone_number">Phone_number</ControlLabel>
            <FormControl
            type="text"
            name="phone_number"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.phone_number} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel id="contact_hours">Contact_Hours</ControlLabel>
            <FormControl
            type="text"
            name="contact_hours"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.contact_hours} />
          </FormGroup>
        </Col>
      </Row>



    </form>
  );
  }
}

export default NewApartment
