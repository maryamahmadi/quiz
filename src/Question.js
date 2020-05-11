import React from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import QuestionResult from './QuestionResult'

import andrew from './resources/andrew.png'
import maryam from './resources/maryam.png'
import matt from './resources/matt.png'
import steve from './resources/steve.png'
import shahram from './resources/shahram.png'
import rohit from './resources/rohit.png'

const images = {
    andrew,
    maryam,
    steve,
    rohit,
    shahram,
    matt
}
class Question extends React.Component {
    constructor () {
        super()
        this.state = {correctAnswer: null, imageName: null, options: [], value: null}
    }

    pickThree = () => {
        let three = []
        const max = this.props.members.length
        let i = 0
        // generate three other random options for the multi-choice
        while (i < 3) {
            let index = Math.floor(Math.random() * max)
            if (this.props.members[index] !== this.state.imageName && !three.includes(this.props.members[index])) {
                i++
                three.push(this.props.members[index])
            }
        }
        return three
    }

    shuffle = (options) => {
        const numberOfChoices = 4
        let index = Math.floor(Math.random() * numberOfChoices)
        if (index !== 0) {
            const temp = options[0]
            options[0] = options[index]
            options[index] = temp
        }
    }

    componentDidMount () {
        const imageName = `${this.props.members[this.props.questionNumber - 1]}`
        this.setState({imageName: imageName}, this.constructChoices)
    }

    componentDidUpdate (prevProps) {
        console.log('Question didupdate', prevProps.questionNumber, this.props.questionNumber)
        if (prevProps.questionNumber !== this.props.questionNumber) {
            console.log('didupdate, prevquestion', prevProps.questionNumber)
            console.log('didupdate, currentquestion', this.props.questionNumber)
            const imageName = `${this.props.members[this.props.questionNumber - 1]}`
            this.setState({imageName: imageName}, this.constructChoices)
            console.log('didupdate, currentimagename', imageName)
        }

    }

    constructChoices = () => {
        console.log('in construct choices')
        let options = []
        options.push(this.state.imageName)
        console.log('construct choices one option is ', this.state.imageName)
        const three = this.pickThree(this.state.imageName)
        console.log('construct choices the other three choices are ', three)

        three.forEach(option => options.push(option))
        this.shuffle(options)
        this.setState({options, value: undefined})
    }

    renderChoices = () => {
        console.log('renderChoices options is', this.state.options)
        return (
            <Form>
            {this.state.options.map(option => {
                return <Form.Field key={option}>
                <Radio
                  label={option}
                  name='radioGroup'
                  value={option}
                  checked={this.state.value === option}
                  onChange={this.handleChange}
                />
              </Form.Field>
            })}
          </Form>
        )
    }
    handleChange = (e, { value }) => {
        console.log('***props are', this.props)
        this.setState({ value })
        if (value === this.state.imageName) {
            this.setState({correctAnswer: true})
            this.props.incrementCorrect()
        } else {
            this.setState({correctAnswer: false})

        }

    }

    onNext = () => {
        if (this.props.questionNumber < this.props.members.length){
            this.props.setQuestionNumber(this.props.questionNumber + 1)
            this.setState({correctAnswer: null, value: null})
        } else {
            this.props.setPage('results')
        }
    }

    render () {
        const label = this.props.questionNumber === this.props.members.length ? 'Results' : 'Next'
        const imageName = `${this.props.members[this.props.questionNumber - 1]}`.toLowerCase()
        return (
            <div>
                <div style={{padding: '48px 0 48px 0', fontSize: '20px', fontWeight: '600'}}>{`${this.props.questionNumber}/${this.props.members.length}. Whose git history is this?`}</div>
                <div style={{paddingBottom: '48px'}}> <img src={images[imageName]} alt={imageName} width='900px' height='200px' /></div>
                <div style={{paddingLeft: '24px'}}>{this.renderChoices(imageName)}</div>
                {this.state.value && <div style={{padding: '48px 0 0 100px'}}><QuestionResult correctAnswer={this.state.correctAnswer}/></div>}
                <div><Button primary onClick={() => this.onNext()}> {label} </Button></div>
            </div>
        )

    } 

}

export default Question
//clean render replace imagename with the one in state