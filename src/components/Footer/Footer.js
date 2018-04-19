import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/apartments">View Model Data</Link>
        <Link to="/apartments/estimates">View Recent Estimates</Link>
      </footer>
    )
  }
}

export default Footer
