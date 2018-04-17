import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class EstimateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    e.preventDefault()
    let target = e.target.name
    let value = e.target.value
    this.setState({
      [target]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:3001/apartments/estimates', {
        type: this.state.type,
        baths: this.state.baths,
        bedrooms: this.state.bedrooms,
        size: this.state.size,
        parking: this.state.parking,
        neighborhood: this.state.neighborhood
      })
      .then(res => {
        this.props.setID(res.data)
        this.props.history.push(`/apartments/estimate/${res.data}`)
      })
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="apartment">I am a:</label>
            <select name="type" onChange={this.handleInput}>
              <option> </option>
              <option value="renter">Renter</option>
              <option value="landlord">Landlord</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="apartment">Bedrooms:</label>
            <select name="bedrooms" onChange={this.handleInput}>
              <option> </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="apartment">Square Feet:</label>
            <input type="number" name="size" onChange={this.handleInput} />
          </div>
          <div className="form-row">
            <label htmlFor="apartment">Bathrooms:</label>
            <select name="baths" onChange={this.handleInput}>
              <option> </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="apartment">Parking Spots:</label>
            <select name="parking" onChange={this.handleInput}>
              <option> </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="apartment">Neighborhood:</label>
            <input
              type="text"
              name="neighborhood"
              onChange={this.handleInput}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default withRouter(EstimateForm)
