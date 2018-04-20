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
            src="https://i.pinimg.com/originals/16/48/87/16488728a4c771820775fb00b5bf5c32.gif"
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
