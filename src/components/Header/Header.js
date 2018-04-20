import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>Rent Check DC</h1>
          <img
            className="logo"
            src="https://cdn.pixabay.com/photo/2012/04/11/15/40/flag-28572_1280.png"
            alt="logo"
          />
        </header>
        <div>
          <nav>
            <div className="navlinks">
              <Link to="/">Home</Link>
            </div>
            <div className="navlinks">
              <Link to="/apartments/new">Get My Estimate</Link>
            </div>
            <div className="navlinks">
              <Link to="/neighborhoods">Neighborhood Map</Link>
            </div>
            <div className="navlinks">
              <Link to="/questions">Frequently Asked Questions</Link>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
