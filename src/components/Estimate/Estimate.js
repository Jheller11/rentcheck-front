import React, { Component } from 'react'
import axios from 'axios'
import Graph from '../Graph/Graph'

class Estimate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/apartments/estimates/${this.state.id}`)
      .then(res => {
        let apartment = res.data[0]
        this.setState({
          data: apartment
        })
      })
  }
  render() {
    let display
    if (this.state.data) {
      display = (
        <main>
          <div className="estimate">
            <div>
              <div className="total">
                <h3>ESTIMATED MONTHLY PRICE:</h3>
                <h3>
                  ${parseInt(this.state.data.rent) - 100} - ${parseInt(
                    this.state.data.rent
                  ) + 100}
                </h3>
              </div>
              <p>Bedrooms: {this.state.data.bedrooms}</p>
              <p>Bathrooms: {this.state.data.baths}</p>
              <p>Size: {this.state.data.size} sq. ft.</p>
              <p>Parking Spots: {this.state.data.parking}</p>
              <p>Neighborhood Rating: {this.state.data.neighborhood}</p>
            </div>
            <div>
              <h3>BREAKDOWN:</h3>
              <Graph apartment={this.state.data} />
            </div>
          </div>
          <div>
            <h3>Search for matching apartments on:</h3>
            <p>
              <a href="https://www.apartments.com/washington-dc/studios-1-bathrooms-1301-to-1800/">
                Apartments.com
              </a>
            </p>
          </div>
        </main>
      )
    } else {
      display = 'No Estimate Found.  Please go back and try again.'
    }
    return (
      <div>
        <h3>Estimate Details:</h3>
        {display}
      </div>
    )
  }
}

export default Estimate
