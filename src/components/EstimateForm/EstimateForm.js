import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class EstimateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baths: 0,
      type: '',
      bedrooms: 0,
      size: 0,
      parking: 0,
      neighborhood: 1
    }

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
      .post('https://rentcheck-dc.herokuapp.com/apartments/estimates', {
        type: this.state.type,
        baths: this.state.baths,
        bedrooms: this.state.bedrooms,
        size: this.state.size,
        parking: this.state.parking,
        neighborhood: this.state.neighborhood
      })
      .then(res => {
        this.props.setID(res.data)
        this.props.history.push(`/apartments/estimates/${res.data}`)
      })
  }

  componentDidMount() {}
  render() {
    return (
      <div className="flex">
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>Fill out this form to receive your estimate!</h3>
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
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="apartment">Neighborhood:</label>
              <select name="neighborhood" onChange={this.handleInput}>
                <option> </option>
                <option value="5">Dupont Circle</option>
                <option value="5">Georgetown</option>
                <option value="5">Logan Circle</option>
                <option value="5">Shaw</option>
                <option value="5">Mt. Vernon</option>
                <option value="4">Downtown</option>
                <option value="4">Foggy Bottom</option>
                <option value="4">AU/Tenleytown</option>
                <option value="4">U St.</option>
                <option value="4">Adams Morgan</option>
                <option value="3">Friendship Heights</option>
                <option value="3">Chevy Chase</option>
                <option value="3">Cleveland Park</option>
                <option value="3">Woodley Park</option>
                <option value="3">Glover Park</option>
                <option value="3">Southwest</option>
                <option value="3">Capitol Hill</option>
                <option value="3">Mt. Pleasant</option>
                <option value="3">Columbia Heights</option>
                <option value="3">Petworth</option>
                <option value="2">Brookland</option>
                <option value="2">Brightwood</option>
                <option value="2">Ft. Totten</option>
                <option value="2">Stadium-Armory</option>
                <option value="2">Brentwood</option>
                <option value="2">Ledroit Park</option>
                <option value="2">Takoma</option>
                <option value="1">Anacostia</option>
                <option value="1">Deanwood</option>
                <option value="3">Other</option>
              </select>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <img
            className="calc"
            src="https://images.pexels.com/photos/67599/calculator-solar-calculator-count-how-to-calculate-67599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(EstimateForm)
