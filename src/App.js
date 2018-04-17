import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import EstimateForm from './components/EstimateForm/EstimateForm'
import Estimate from './components/Estimate/Estimate'
import './App.css'
import QuestionContainer from './components/QuestionContainer/QuestionContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: ''
    }
    this.setID = this.setID.bind(this)
  }

  setID(id) {
    this.setState({
      id: id
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
            path="/apartments/estimate"
            render={() => <Estimate id={this.state.id} />}
          />
          <Route path="/questions" render={() => <QuestionContainer />} />
          <Route path="/" component={Intro} />
        </Switch>
      </div>
    )
  }
}

export default App
