import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class ApartmentContainer extends Component {
  constructor() {
    super()
    this.state = {
      apartments: [],
      count: 0,
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
          Header: 'Remove Data',
          accessor: '_id',
          Cell: props => <button className="number">{props.value}</button>
        }
      ]
    }
  }

  handleDelete(id) {
    axios
      .delete(`https://rentcheck-dc.herokuapp.com/apartments/${id}`)
      .then(() => {
        this.componentDidMount()
      })
  }

  componentDidMount() {
    let apartments = []
    axios
      .get('https://rentcheck-dc.herokuapp.com/apartments')
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
          getTdProps={id => {
            return {
              onClick: (e, handleOriginal) => {
                this.handleDelete(e.target.innerText)
              }
            }
          }}
          data={this.state.apartments}
          columns={this.state.columns}
          defaultPageSize={10}
        />
      </div>
    )
  }
}

export default ApartmentContainer
