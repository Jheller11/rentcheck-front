import React, { Component } from 'react'
import Question from '../Question/Question'

class QuestionContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let questions = this.props.questions.map(question => {
      console.log(question)
      return <Question props={question} />
    })
    return (
      <div>
        <h3>F.A.Q.</h3>
        <div>{questions}</div>
      </div>
    )
  }
}

export default QuestionContainer
