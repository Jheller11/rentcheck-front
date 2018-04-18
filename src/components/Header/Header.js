import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>RentCheck DC</h1>
          <img className="logo" src="/logo.png" alt="logo" />
        </header>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/apartments/new">Get My Estimate</Link>
            <Link to="/neighborhoods">Neighborhood Map</Link>
            <Link to="/questions">Frequently Asked Questions</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
