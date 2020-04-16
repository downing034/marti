import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render () {
    return (
      <div className="container text-center">
        <div className="well">
          <h1>404: Not found</h1>
          <Link to='/'>Back to home</Link>
        </div>
      </div>
    )
  }
}

export default NotFound
