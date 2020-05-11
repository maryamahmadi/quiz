import React from 'react'


function Results (props) {
    let total = 6 // number of questions/members
    let text = ''
    if (props.numCorrect > .8 * total) {
        text = `Your score is ${Math.trunc((props.numCorrect/6)*100)}%. You know your team very well!!!`
    } else if (props.numCorrect < .8 * total && props.numCorrect > .5 * total){
        text = `Your score is ${Math.trunc((props.numCorrect/6)*100)}%. You know half of your team!!!`
    } else {
        text = `Your score is ${Math.trunc((props.numCorrect/6)*100)}%. You don't know your team!!!`
    }
    return <div style={{position: 'absolute', top: '30%', bottom: '50%'}}>
                <div style={{fontSize: '30px', fontWeight: '700'}}> {text} </div>
    </div>
}
export default Results