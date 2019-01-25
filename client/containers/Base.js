import React, { Component } from 'react'

class Base extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async componentWillMount() {
    const users =  await fetch('http://localhost:3000/users')
      .then(response => response.json())

    this.setState(() => {
      return {users: users}
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <h1>Welcome...</h1>
        <hr />
        {this.state.users.map((user, i) => {
          return (
            <div>
              <h4>Name: {user.name}</h4>
              <p>User: {user.username}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Base
