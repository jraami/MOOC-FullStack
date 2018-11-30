import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    clickGood = () => {
        this.setState({
            good: this.state.good + 1
        })
        console.log("good")
    }
    clickNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
    clickBad = () => {
        this.setState({
            bad: this.state.bad + 1,
        })
    }



    render() {
        const summary = () => {
            if (this.state.good === 0 && this.state.neutral === 0 && this.state.neutral === 0) {
                return (
                    <div>
                        <em>No feedbacks given yet. Be first to rate your experience at UniCafe!</em>
                    </div>
                )
            }
            return (
                <div>
                    <p>
                        Good: {this.state.good}<br />
                        Neutral: {this.state.neutral}<br />
                        Bad: {this.state.bad}
                        </p>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <button onClick={this.clickGood}>Good</button>
                    <button onClick={this.clickNeutral}>Neutral</button>
                    <button onClick={this.clickBad}>Bad</button>
                </div>
                {summary()}  
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
