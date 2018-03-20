import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const App = () => (
  <div>
    <Navigation />
    <Content />
  </div>
);

export default App;

// import React, { Component } from 'react';
// import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
// import {
//   Grid,
//   PageHeader,
//   Row,
//   Col
// } from 'react-bootstrap';
//
// import '../css/App.css';
// import Apartments from './Apartments';
// import NewApartment from './NewApartment';
// import withAuth from './withAuth';
// import AuthService from '../services/AuthService'
//
// const Auth = new AuthService()
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       apiUrl: "http://localhost:3000",
//       apartments: [],
//       newApartmentSuccess: false,
//       errors: null
//     }
//   }
//
//   handleLogout(){ // <- Remove local storage, and redirect the user
//       Auth.logout()
//       this.props.history.replace('/login');
//     }
//
//   newApartmentSubmit(apartment){
//     fetch(`${this.state.apiUrl}/apartments`,
//       {
//         body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
//         headers: {  // <- We specify that we're sending JSON, and expect JSON back
//           'Content-Type': 'application/json'
//         },
//         method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
//       }
//     )
//     .then((rawResponse)=>{
//       // rawResponse.json() itself returns another promise, we we need to resolve it before continuingg
//       return Promise.all([rawResponse.status, rawResponse.json()])
//     })
//     .then((parsedResponse) =>{
//       if(parsedResponse[0] === 422){ // <- Check for any server side errors
//         this.setState({errors: parsedResponse[1]})
//       }else{
//         const apartments = Object.assign([], this.state.apartments)
//         apartments.push(parsedResponse[1]) // <- Add the new apartment to our list of apartments
//         this.setState({
//           apartments: apartments,  // <- Update cats in state
//           errors: null, // <- Clear out any errors if they exist,
//           newApartmentSuccess: true
//         })
//       }
//     })
//   }
//
//   componentWillMount(){
//     fetch(`${this.state.apiUrl}/apartments`)
//     .then((rawResponse) =>{
//       return rawResponse.json()
//     })
//     .then((parsedResponse)=>{
//       this.setState({apartments: parsedResponse})
//     })
//   }
//
//
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path = "/" render={props => (
//             <Grid>
//               <PageHeader>
//                 <Row>
//                   <Col xs={8}>
//                   Apartment App
//                   <small className="subtitle">Add an Apartment</small>
//                 </Col>
//                 <Col xs={4}>
//                   <small>
//                     <Link to='/apartments' id='apartments-link'> Show me the Apartments</Link>
//                   </small>
//                 </Col>
//                 </Row>
//               </PageHeader>
//               <NewApartment onSubmit={this.newApartmentSubmit.bind(this)}
//               errors={this.state.errors} />
//               {this.state.newApartmentSuccess &&
//               <Redirect to="/apartments" />
//               }
//             </Grid>
//         )} />
//         <Route exact path="/apartments" render={props => (
//          <Grid>
//            <PageHeader>
//              <Row>
//                <Col xs={8}>
//                  Apartment Tinder
//                  <small className='subtitle'>All the Apartments</small>
//                </Col>
//                <Col xs={4}>
//                  <small>
//                    <Link to='/' id='apartments-link'>Add an Apartment</Link>
//                  </small>
//                </Col>
//              </Row>
//            </PageHeader>
//            <Apartments apartments={this.state.apartments} />
//          </Grid>
//        )} />
//        <p className="App-intro">
//        <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
//      </p>
//      </div>
//    </Router>
//     );
//   }
// }
//
// export default withAuth(App);
