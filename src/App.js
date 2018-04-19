import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import EstimateForm from './components/EstimateForm/EstimateForm'
import Estimate from './components/Estimate/Estimate'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import './App.css'
import QuestionContainer from './components/QuestionContainer/QuestionContainer'
import ApartmentContainer from './components/ApartmentContainer/ApartmentContainer'
import Map from './components/Map/Map'
import EstimateContainer from './components/EstimatesContainer/EstimatesContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      mlr: []
    }
    this.setID = this.setID.bind(this)
  }

  setID(id) {
    this.setState({
      id: id
    })
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/apartments/mlr`).then(res => {
      let mlr = res.data.weights.map(array => {
        return array[0]
      })
      this.setState({
        mlr: mlr
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/apartments/new"
            render={props => <EstimateForm {...props} setID={this.setID} />}
          />
          <Route
            path="/apartments/estimates/:id"
            render={() => <Estimate id={this.state.id} mlr={this.state.mlr} />}
          />
          <Route
            path="/apartments/estimates"
            render={() => <EstimateContainer />}
          />
          <Route path="/questions" render={() => <QuestionContainer />} />
          <Route path="/apartments" render={() => <ApartmentContainer />} />

          <Route path="/neighborhoods" render={() => <Map />} />
          <Route path="/" component={Intro} />
        </Switch>
        <div className="fill" />
        <Footer />
      </div>
    )
  }
}

export default App
