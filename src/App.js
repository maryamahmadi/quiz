import React from 'react'
import AppBanner from './AppBanner'
import Start from './Start'
import Quiz from './Quiz'
import Results from './Results'

class App extends React.Component {
  constructor () {
    super()
    this.state = {page: 'start', numCorrect: 0}
  }

  setPage = (page) => {
    this.setState({page})
  }

  incrementCorrect = () => {
    console.log('#corretc', this.state.numCorrect + 1)
    this.setState({numCorrect: this.state.numCorrect + 1})
  }

  pickComponent = () => {
      switch(this.state.page) {
        case 'start':
          return <Start setPage={this.setPage} />
        case 'quiz':
          return <Quiz incrementCorrect={this.incrementCorrect} questionNumber={this.state.questionNumber} setPage={this.setPage} />
        case 'results':
          return <Results numCorrect={this.state.numCorrect} />
        default:
          return <Start setPage={this.setPage} />
      }

  }

  render () {
    return (
      <div>
        <AppBanner />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> {this.pickComponent()} </div>
      </div>
    );
  }
}

export default App
