import React from 'react'

const Question = props => {
  return (
    <div>
      <h4>Q: {props.props.question}</h4>
      <p>A: {props.props.answer}</p>
    </div>
  )
}

export default Question
