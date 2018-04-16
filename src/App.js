import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import EstimateForm from './components/EstimateForm/EstimateForm'
import './App.css'
import QuestionContainer from './components/QuestionContainer/QuestionContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [
        { question: 'How do I use your site?', answer: 'Just figure it out' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/apartments/estimate" component={EstimateForm} />
          <Route
            path="/faq"
            render={() => (
              <QuestionContainer questions={this.state.questions} />
            )}
          />
          <Route path="/" component={Intro} />
        </Switch>
      </div>
    )
  }
}

export default App
