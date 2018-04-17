import React, { Component } from 'react'
const PieChart = require('react-chartjs').Pie

var data = [
  {
    value: 300,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red'
  },
  {
    value: 50,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Green'
  },
  {
    value: 100,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Yellow'
  }
]

class Graph extends Component {
  render() {
    return (
      <div>
        <PieChart data={data} redraw height="300px" width="300px" />
      </div>
    )
  }
}

export default Graph
