import React, { Component } from 'react';
import {
  Table
} from 'react-bootstrap';
import "../css/Apartment.css"

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
      <div className = "center">
      <div className = "card">
      <Table striped hover>
        <thead>
          <tr>
            <th className = "more">Address</th>
            <th className = "more">Landlord</th>
            <th className = "more">Phone Number</th>
            <th className = "more">Hours of Contact</th>
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
      </div>
      </div>
    );
  }
}
