import React from 'react'

function QuestionResult (props) {
    if (props.correctAnswer) {
        return <div style={{fontSize: '40px', fontWeight: '600', color: '#9dea4f'}}> Correct!</div>
    } else {
        return <div style={{fontSize: '40px', fontWeight: '600', color: '#ff0000'}}> Nope!</div>
    }
}

export default QuestionResult