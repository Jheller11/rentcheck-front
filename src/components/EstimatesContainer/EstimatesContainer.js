import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class EstimateContainer extends Component {
  constructor() {
    super()
    this.state = {
      estimates: [],
      columns: [
        {
          Header: 'Price',
          accessor: 'rent',
          Cell: props => <span className="number">{parseInt(props.value)}</span>
        },
        {
          Header: 'Bedrooms',
          accessor: 'bedrooms'
        },
        {
          Header: 'Bathrooms',
          accessor: 'baths'
        },
        {
          Header: 'Sq. Ft.',
          accessor: 'size'
        },
        {
          Header: 'Location',
          accessor: 'address'
        },
        {
          Header: 'Parking Spots',
          accessor: 'parking'
        },
        {
          Header: 'Remove Data',
          accessor: '_id',
          Cell: props => <button className="number">{props.value}</button>
        }
      ]
    }
  }

  handleDelete(id) {
    axios
      .delete(`http://localhost:3001/apartments/estimates/${id}`)
      .then(() => {
        this.componentDidMount()
      })
  }

  componentDidMount() {
    let estimates = []
    axios
      .get('http://localhost:3001/apartments/estimates')
      .then(res => {
        res.data.forEach(est => {
          estimates.push(est)
        })
      })
      .then(() =>
        this.setState({
          estimates: estimates
        })
      )
  }

  render() {
    return (
      <div className="table">
        <ReactTable
          getTdProps={id => {
            return {
              onClick: (e, handleOriginal) => {
                this.handleDelete(e.target.innerText)
              }
            }
          }}
          data={this.state.estimates}
          columns={this.state.columns}
          defaultPageSize={10}
        />
      </div>
    )
  }
}

export default EstimateContainer
