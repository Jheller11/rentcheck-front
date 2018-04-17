import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/admin">Admin Login</Link>
        <Link to="/apartments">View Model Data</Link>
      </footer>
    )
  }
}

export default Footer
