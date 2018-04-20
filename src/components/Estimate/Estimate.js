import React, { Component } from 'react'
import axios from 'axios'
import Graph from '../Graph/Graph'
import ApartmentData from '../ApartmentData/ApartmentData'

class Estimate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }
  componentDidMount() {
    axios
      .get(
        `https://rentcheck-dc.herokuapp.com/apartments/estimates/${
          this.state.id
        }`
      )
      .then(res => {
        let apartment = res.data[0]
        this.setState({
          data: apartment
        })
      })
  }
  render() {
    let display
    let category
    if (this.state.data) {
      switch (parseInt(this.state.data.bedrooms)) {
        case 0:
          category = 'studios'
          break
        case 1:
          category = '1-bedrooms'
          break
        case 2:
          category = '2-bedrooms'
          break
        case 3:
          category = '3-bedrooms'
          break
        default:
          break
      }
      display = (
        <main>
          <div className="estimate">
            <div>
              <div>
                <h3 className="inline">
                  Estimated Monthly Price:{' '}
                  <h3 className="total inline">
                    ${parseInt(this.state.data.rent) - 100} - ${parseInt(
                      this.state.data.rent
                    ) + 100}
                  </h3>
                </h3>
              </div>
              <p>Bedrooms: {this.state.data.bedrooms}</p>
              <p>Bathrooms: {this.state.data.baths}</p>
              <p>Size: {this.state.data.size} sq. ft.</p>
              <p>Parking Spots: {this.state.data.parking}</p>
              <p>Neighborhood Rating: {this.state.data.neighborhood}</p>
            </div>
            <div>
              <h3>Breakdown:</h3>
              <Graph apartment={this.state.data} mlr={this.props.mlr} />
              <p>
                Hover over a section to see the impact each input has on the
                overall price.
              </p>
            </div>
            <div>
              <h3>Average Price/Size for Washington, D.C.</h3>
              <ApartmentData apartment={this.state.data} />
            </div>
            <div>
              <h3>Search for matching apartments on:</h3>
              <p>
                <a
                  href={`https://www.apartments.com/washington-dc/${category}-${
                    this.state.data.baths
                  }-bathrooms-${parseInt(this.state.data.rent) -
                    100}-to-${parseInt(this.state.data.rent) + 100}/`}
                  target="_blank"
                >
                  Apartments.com
                </a>
              </p>
              <p>
                <a
                  href={`https://washingtondc.craigslist.org/search/doc/apa?min_price=${parseInt(
                    this.state.data.rent
                  ) - 100}&max_price=${parseInt(this.state.data.rent) +
                    100}&availabilityMode=0&sale_date=all+dates`}
                  target="_blank"
                >
                  craigslist
                </a>
              </p>
            </div>
          </div>
        </main>
      )
    } else {
      display = 'No Estimate Found.  Please go back and try again.'
    }
    return (
      <main>
        <h3>Estimate Details:</h3>
        {display}
      </main>
    )
  }
}

export default Estimate
