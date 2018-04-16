import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import EstimateForm from './components/EstimateForm/EstimateForm'
import './App.css'
import QuestionContainer from './components/QuestionContainer/QuestionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/apartments/new" render={() => <EstimateForm />} />
          <Route path="/questions" render={() => <QuestionContainer />} />
          <Route path="/" component={Intro} />
        </Switch>
      </div>
    )
  }
}

export default App
