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
            selected: 0
        }   
    }
    nextAnecdote = () =>
            this.setState({
                selected: Math.round(Math.random() * (anecdotes.length-1))
            })

    vote = () => {
        this.props.anecdotes[this.state.selected].votes++
        this.nextAnecdote()
        console.log("haloo")
}
    render() {
        return (
            <div>
                {this.props.anecdotes[this.state.selected].anecdote} <br />
                This anecdote has {this.props.anecdotes[this.state.selected].votes} votes.
                <Button text="Hit me!" handleClick={this.nextAnecdote} />
                <Button text="Vote this!" handleClick={this.vote} />
            </div>
        )
    }
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
