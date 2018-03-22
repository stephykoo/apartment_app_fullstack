import React, { Component } from 'react'
import withAuth from './withAuth'
import AuthService from '../services/AuthService'

const Auth = new AuthService()

class Profile extends Component {
  constructor(props){
    super()
    this.state = {user: null}
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  componentWillMount() {
    const userId = Auth.getUserId()
    Auth.fetch(`http://localhost:3000/users/${userId}`).then( res => {
      this.setState({ user: res })
    })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h3>Profile</h3>
          {this.state.user &&
          <div>
            <div>Name: {this.state.user.name}</div>
            <div>Email: {this.state.user.email}</div>
            <div>Roles: {this.state.user.roles.map( role => {
              return(
                <li key={role.name}>{role.name}</li>
              )
            })}</div>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default withAuth(Profile)
