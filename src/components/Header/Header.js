import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <img src="/logo.png" alt="logo" />
          <h1>RentCheck</h1>
        </header>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/apartments/new">Get My Estimate</Link>
            <Link to="/neighborhoods">Neighborhood Info</Link>
            <Link to="/questions">Frequently Asked Questions</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
