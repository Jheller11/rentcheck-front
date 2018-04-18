import React, { Component } from 'react'
const PieChart = require('react-chartjs').Pie

class Graph extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          value: parseInt(
            (this.props.apartment.bedrooms + 1) *
              (this.props.mlr[0] + this.props.mlr[1]) *
              0.6 /
              this.props.apartment.rent *
              100
          ),
          color: 'red',
          highlight: '#FF5A5E',
          label: 'Bedrooms (%)'
        },
        {
          value: parseInt(
            this.props.apartment.baths *
              (this.props.mlr[0] + this.props.mlr[1]) *
              0.4 /
              this.props.apartment.rent *
              100
          ),
          color: 'blue',
          highlight: '#FF5A5E',
          label: 'Bathrooms (%)'
        },
        {
          value: parseInt(
            this.props.apartment.size *
              this.props.mlr[2] /
              this.props.apartment.rent *
              100
          ),
          color: 'green',
          highlight: '#FF5A5E',
          label: 'Size (%)'
        },
        {
          value: parseInt(
            this.props.apartment.parking *
              this.props.mlr[3] /
              this.props.apartment.rent *
              100
          ),
          color: 'grey',
          highlight: '#FF5A5E',
          label: 'Parking (%)'
        },
        {
          value: parseInt(
            (this.props.apartment.neighborhood * this.props.mlr[4] +
              this.props.mlr[5]) /
              this.props.apartment.rent *
              100
          ),
          color: 'orange',
          highlight: '#FF5A5E',
          label: 'Location (%)'
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
