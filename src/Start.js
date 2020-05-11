import React from 'react'
import { Button } from 'semantic-ui-react'

class StartHere extends React.Component {
    render () {
        console.log('Start props', this.props)

        return (
            <div style={{position: 'absolute', top: '30%', bottom: '50%'}}>
                <div style={{fontSize: '30px', fontWeight: '700'}}> Welcome to the Quiz!</div>
                <div style={{paddingTop: '24px', paddingLeft: '100px'}}>
                    <Button primary onClick={() => this.props.setPage('quiz')}> Start! </Button>
                </div>
            </div>
        )
    }
}
export default StartHere
