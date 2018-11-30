import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
    <div>
        <button onClick={handleClick}>
            {text}
        </button>
    </div>
)

var anecdotes = [
    {
        anecdote : 'If it hurts, do it more often',
        votes : 0
    },
    {
        anecdote : 'Adding manpower to a late software project makes it later!',
        votes : 0
    },
    {
        anecdote : 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes : 0
    },
    {
        anecdote : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes : 0
    },
    {
        anecdote : 'Premature optimization is the root of all evil.',
        votes : 0
    },
    {
        anecdote : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            bestAnecdote: null
        }   
    }
    nextAnecdote = () => 
            this.setState({
                selected: Math.round(Math.random() * (anecdotes.length-1))
            })

    vote = () => {
        this.props.anecdotes[this.state.selected].votes++
        this.max()
        this.nextAnecdote()
    }

    max = () => {
        this.setState({
            bestAnecdote: anecdotes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current, 1)
        })
    }


    render() {
        const summary = () => {
            if (this.state.bestAnecdote === null) {
                return (
                    <div>
                        <p>No votes yet. Vote for your favorite anecdote!</p>
                    </div>
                )
            }
            return (
                <div>
                    <p>
                    This anecdote has the most votes ({this.state.bestAnecdote.votes}):<br/>
                {this.state.bestAnecdote.anecdote}<br/>
                    </p>
                </div>
            )
        }

        return (
            <div>
                {this.props.anecdotes[this.state.selected].anecdote} <br />
                This anecdote has {this.props.anecdotes[this.state.selected].votes} votes. <br/>
                <Button text="Hit me!" handleClick={this.nextAnecdote} />
                <Button text="Vote this!" handleClick={this.vote} />
                {summary()} 
            </div>
        )
        
    }
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
