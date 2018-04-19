import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Intro extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <div className="flex">
            <div>
              <h3>For Renters:</h3>
              <p>
                Use this tool to get a market-based rent estimate for your next
                Washington, DC apartment. Click{' '}
                <Link to="/apartments/new">here</Link> to get started!
              </p>
            </div>
            <img src="https://images.pexels.com/photos/161768/lafayette-park-washington-dc-c-architecture-161768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="flex">
            <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div>
              <h3>For Landlords:</h3>
              <p>
                Renting out your basement or condo? Use the tool to get the best
                value for your property based on similar rentals in your area.
                Click <Link to="/apartments/new">here</Link> to get started!
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <h3>Questions?</h3>
            <p>
              Check out the <Link to="/questions/">F.A.Q.</Link> for more
              information!
            </p>
          </div>
          <img src="https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </div>
    )
  }
}

export default Intro
