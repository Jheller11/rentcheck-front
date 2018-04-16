import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="logo.png" alt="logo" />
          <h1>RentCheck</h1>
        </header>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/renters">Renters</Link>
            <Link to="/landlords">Landlords</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
