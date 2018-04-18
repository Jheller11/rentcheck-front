import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class ApartmentContainer extends Component {
  constructor() {
    super()
    this.state = {
      apartments: [],
      columns: [
        {
          Header: 'Price',
          accessor: 'rent'
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
          Header: 'Delete',
          accessor: '_id',
          Cell: props => (
            <button
              onSubmit={this.handleDelete(props.value)}
              className="number"
            >
              Delete Apt.
            </button>
          )
        }
      ]
    }
  }

  handleDelete(id) {
    axios.delete(`http://localhost:3001/apartments/${id}`).then(() => {
      console.log('deleted')
    })
  }

  componentDidMount() {
    let apartments = []
    axios
      .get('http://localhost:3001/apartments')
      .then(res => {
        res.data.forEach(apt => {
          apartments.push(apt)
        })
      })
      .then(() =>
        this.setState({
          apartments: apartments
        })
      )
  }

  render() {
    return (
      <div className="table">
        <ReactTable
          data={this.state.apartments}
          columns={this.state.columns}
          defaultPageSize={10}
        />
      </div>
    )
  }
}

export default ApartmentContainer
