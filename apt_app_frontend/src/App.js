import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Row,
  Col
} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import Apartments from './pages/Apartments';
import NewApartment from './pages/NewApartment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: [
        {
          id: 0,
          street_1: '1234 Plum Road',
          city: 'Fruit',
          state: 'Produce',
          postal_code: '12345',
          country: 'USA',
          name: 'Farmer John',
          phone_number: '123-456-7890',
          contact_hours: 'Tuesdays and Thursdays 12pm-4pm'
        },
        {
          id: 1,
          street_1: '2211 Bluebird Lane',
          city: 'Aviary',
          state: 'Zoop',
          postal_code: '54321',
          country: 'USA',
          name: 'Birch Tree',
          phone_number: '123-456-7890',
          contact_hours: 'Weekends only'
        },
        {
          id: 2,
          street_1: '7359 Gummy Bear Drive',
          city: 'Sour',
          state: 'Patch',
          postal_code: '12121',
          country: 'USA',
          name: 'Elle Woods',
          phone_number: '123-456-7890',
          contact_hours: 'Monday afternoons'
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                  Apartment App
                  <small className="subtitle">Add an Apartment</small>
                </Col>
                <Col xs={4}>
                  <small>
                    <Link to='/apartments' id='apartments-link'> Show me the Apartments</Link>
                  </small>
                </Col>
                </Row>
              </PageHeader>
              <NewApartment />
            </Grid>
        )} />
        <Route exact path="/apartments" render={props => (
         <Grid>
           <PageHeader>
             <Row>
               <Col xs={8}>
                 Apartment Tinder
                 <small className='subtitle'>All the Apartments</small>
               </Col>
               <Col xs={4}>
                 <small>
                   <Link to='/' id='apartments-link'>Add an Apartment</Link>
                 </small>
               </Col>
             </Row>
           </PageHeader>
           <Apartments apartments={this.state.apartments} />
         </Grid>
       )} />
     </div>
   </Router>
    );
  }
}

export default App;
