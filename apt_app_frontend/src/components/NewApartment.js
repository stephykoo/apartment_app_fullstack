import React, { Component } from 'react';
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

  handleSubmit(){
    this.props.onSubmit(this.state.form)
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
      <form>
        <Row>
            <Col xs={6}>
              {this.props.errors &&
                <Alert bsStyle="danger">
                  Please check the form and try again.
                </Alert>
              }
            </Col>
          </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="street1-form-group"
              validationState={this.errorsFor('street_1') && 'error'}
            >
              <ControlLabel id="street_1">Street_1</ControlLabel>
              <FormControl
                type="text"
                name="street_1"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.street_1}
              />
              {this.errorsFor('street_1') &&
                <HelpBlock id="street1-help-block">{this.errorsFor('street_1')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="street2-form-group"
              validationState={this.errorsFor('street_2') && 'error'}
            >
              <ControlLabel id="street_2">Street_2</ControlLabel>
              <FormControl
                type="text"
                name="street_2"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.street_2}
              />
              {this.errorsFor('street_2') &&
                <HelpBlock id="street2-help-block">{this.errorsFor('street_2')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="city-form-group"
              validationState={this.errorsFor('city') && 'error'}
            >
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.city}
              />
              {this.errorsFor('city') &&
                <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="state-form-group"
              validationState={this.errorsFor('state') && 'error'}
            >
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
                type="text"
                name="state"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.state}
              />
              {this.errorsFor('state') &&
                <HelpBlock id="state-help-block">{this.errorsFor('state')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="postalcode-form-group"
              validationState={this.errorsFor('postal_code') && 'error'}
            >
              <ControlLabel id="postal_code">Postal_Code</ControlLabel>
              <FormControl
                type="text"
                name="postal_code"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.postal_code}
              />
              {this.errorsFor('postal_code') &&
                <HelpBlock id="postalcode-help-block">{this.errorsFor('postal_code')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="country-form-group"
              validationState={this.errorsFor('country') && 'error'}
            >
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl
                type="text"
                name="country"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.country}
              />
              {this.errorsFor('country') &&
                <HelpBlock id="country-help-block">{this.errorsFor('country')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="name-form-group"
              validationState={this.errorsFor('name') && 'error'}
            >
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name}
              />
              {this.errorsFor('name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="phonenumber-form-group"
              validationState={this.errorsFor('phone_number') && 'error'}
            >
              <ControlLabel id="phone_number">Phone_number</ControlLabel>
              <FormControl
                type="text"
                name="phone_number"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.phone_number}
              />
              {this.errorsFor('phone_number') &&
                <HelpBlock id="phonenumber-help-block">{this.errorsFor('phone_number')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="contacthours-form-group"
              validationState={this.errorsFor('contact_hours') && 'error'}
            >
              <ControlLabel id="contact_hours">Contact_Hours</ControlLabel>
              <FormControl
                type="text"
                name="contact_hours"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.contact_hours}
              />
              {this.errorsFor('contact_hours') &&
                <HelpBlock id="contacthours-help-block">{this.errorsFor('contact_hours')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
         <Col xs={6}>
          <Button id="submit"
          onClick={this.handleSubmit.bind(this)}>
          Create Apartment</Button>
          </Col>
        </Row>

      </form>
    );
  }
}

export default NewApartment
