import React, { Component } from 'react'
const PieChart = require('react-chartjs').Doughnut

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    let apartment = this.props.apartment
    let mlr = this.props.mlr
    this.setState({
      data: [
        {
          value: parseInt(
            apartment.bedrooms * mlr[0] + apartment.size * mlr[2] - 80
          ),
          color: 'red',
          highlight: '#F99B02',
          label: 'Bedrooms/Size ($)'
        },
        {
          value: parseInt(apartment.baths * mlr[1] - 80),
          color: 'blue',
          highlight: '#7D01F9',
          label: 'Bathrooms ($)'
        },
        {
          value: parseInt(apartment.parking * mlr[3]),
          color: 'grey',
          highlight: '#FF5A5E',
          label: 'Parking ($)'
        },
        {
          value: parseInt(apartment.neighborhood * mlr[4] - 80),
          color: '#21BA33',
          highlight: '#01F91D',
          label: 'Location ($)'
        }
      ]
    })
  }
  render() {
    let data
    if (this.state.data) {
      data = this.state.data
    } else {
      data = [{ value: 1, label: 'start' }]
    }
    return (
      <div>
        <PieChart data={data} redraw height="300px" width="300px" />
      </div>
    )
  }
}

export default Graph
