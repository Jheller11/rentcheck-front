import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Intro extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <div className="column">
            <h3>For Renters:</h3>
            <p>
              Use this tool to get a market-based rent estimate for your next
              Washington, DC apartment. Click
              <Link to="/apartments/new">here</Link> to get started!
            </p>
          </div>
          <div className="column">
            <h3>For Landlords:</h3>
            <p>
              Renting out your basement or condo? Use the tool to get the best
              value for your property based on similar rentals in your area.
              Click <Link to="/apartments/new">here</Link> to get started!
            </p>
          </div>
        </div>
        <div className="content">
          <h3>Questions?</h3>
          <p>
            Check out the <Link to="/questions/">F.A.Q.</Link> for more
            information!
          </p>
        </div>
      </div>
    )
  }
}

export default Intro
