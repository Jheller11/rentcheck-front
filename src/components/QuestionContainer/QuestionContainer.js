import React, { Component } from 'react'
import Question from '../Question/Question'
import axios from 'axios'

class QuestionContainer extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      newQuestion: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    e.preventDefault()
    let question = e.target.value
    this.setState({
      newQuestion: question
    })
  }

  handleSubmit(e) {
    axios
      .post('http://localhost:3001/questions', {
        question: this.state.newQuestion
      })
      .then(() =>
        this.setState({
          newQuestion: ''
        })
      )
  }

  componentDidMount() {
    let questions = []
    axios
      .get('http://localhost:3001/questions')
      .then(res => {
        res.data.forEach(question => {
          questions.push(question)
        })
      })
      .then(() =>
        this.setState({
          questions: questions
        })
      )
  }
  render() {
    let questions = this.state.questions.map((question, index) => {
      if (question.answer) {
        return <Question props={question} key={index} />
      }
    })
    return (
      <div className="faq">
        <h3>F.A.Q.</h3>
        <div>{questions}</div>
        <div>
          <h4>Still have a question?</h4>
          <p>Contact us using the form below:</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              name="question"
              placeholder="..."
              onChange={this.handleInput}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionContainer
