import React, { Component } from 'react';
import {
  Table
} from 'react-bootstrap';

export default class Apartments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: "http://localhost:3000",
      apartments: []
    }
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/apartments`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse)=>{
      this.setState({apartments: parsedResponse})
    })
  }

  render() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Address</th>
            <th>Landlord</th>
            <th>Phone Number</th>
            <th>Hours of Contact</th>
          </tr>
        </thead>
        <tbody>
          {this.state.apartments.map((apt, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <p>{apt.street_1}</p>
                  <p>{apt.street_2}</p>
                  <p>{apt.city}, {apt.state} {apt.postal_code}</p>
                  <p>{apt.country}</p>
                </td>
                <td>{apt.name}</td>
                <td>{apt.phone_number}</td>
                <td>{apt.contact_hours}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    );
  }
}
