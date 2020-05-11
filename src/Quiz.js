import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
    constructor () {
        super()
        this.state={questionNumber: 1}
        this.members = ['Maryam', 'Matt', 'Steve', 'Shahram', 'Rohit', 'Andrew']
    }

    setQuestionNumber = (questionNumber) => {
        console.log('in quiz new question number is', questionNumber)
        this.setState({questionNumber})
    }

    render () {
        console.log('members', this.members)
        return <div>
            <Question 
                members={this.members} 
                questionNumber={this.state.questionNumber} 
                setQuestionNumber={this.setQuestionNumber}
                setPage={this.props.setPage}
                incrementCorrect={this.props.incrementCorrect}
                total={this.members.length}
            /> 

        </div>
    }
}

export default Quiz