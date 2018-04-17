import React, { Component } from 'react'
import axios from 'axios'

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
    return <div>{this.state.id}</div>
  }
}

export default Estimate
