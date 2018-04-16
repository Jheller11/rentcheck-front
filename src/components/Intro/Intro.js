import React, { Component } from 'react'

class Intro extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <div>
            <h3>For Renters:</h3>
            <p>
              Use this tool to get a market-based rent estimate for your next
              Washington, DC apartment. Click here to get started!
            </p>
          </div>
          <div>
            <h3>For Landlords:</h3>
            <p>
              Renting out your basement or condo? Use the tool to get the best
              value for your property based on similar rentals in your area.
              Click here to get started!
            </p>
          </div>
        </div>
        <div>
          <h3>Questions?</h3>
          <p>Check out the FAQ for more information!</p>
        </div>
      </div>
    )
  }
}

export default Intro
