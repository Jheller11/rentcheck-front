import React, { Component } from 'react'
import Question from '../Question/Question'
import axios from 'axios'

class QuestionContainer extends Component {
  constructor() {
    super()
    this.state = {
      questions: [
        {
          question: 'How is the estimate generated?',
          answer:
            'RentCheck DC uses a multivariate linear regression to develop a model based on numerous available apartment listings.  The data a user submits is compared to the model and a monthly rental price is generated.'
        },
        {
          question: 'How accurate is the estimate?',
          answer:
            'It depends...the data is biased slightly towards luxury apartment buildings because of the current data set.  We are working on adding a broader range of data.  Apartments in older buildings and/or further from metro stations will fall towards the low end of the estimate or possibly below it.'
        },
        {
          question: 'Can I save my estimates?',
          answer:
            'Not yet, we are working on creating user profiles to allow you to save your searches and/or receive results by email.'
        },
        {
          question: 'Can I see the data?',
          answer:
            'Yes, the data is available via a link in the footer of this page.'
        }
      ],
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
      .post('https://rentcheck-dc.herokuapp.com/questions', {
        question: this.state.newQuestion
      })
      .then(() =>
        this.setState({
          newQuestion: ''
        })
      )
  }

  componentDidMount() {
    let questions = this.state.questions
    axios
      .get('https://rentcheck-dc.herokuapp.com/questions')
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
