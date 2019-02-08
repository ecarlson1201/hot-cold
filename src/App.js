import React, { Component } from 'react';
import './App.css';
import Game from './components/game'
import GuessCounter from './components/guess-counter'

const reset = {
  number: Math.floor(Math.random() * 100) + 1,
  guessList: [],
  currentGuess: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = reset
  }

  handleReset(){
    this.setState({reset})
  }

  setGuessList(guess) {
    this.setState({
      guessList: [...this.state.guessList, parseInt(guess)]
    })

    if (this.state.guessList.length > 0) {
      this.setState({
        currentGuess: guess
      })
    }
  }

  hotOrCold(guess) {
    const difference = this.state.number - guess

    if (this.state.guessList.length === 0) {
      return "Make Your Guess"
    }

    if (Math.abs(difference) === 0) {
      return "Correct!"
    }
    if (Math.abs(difference) < 15) {
      return "Hot"
    }
    else {
      return "Cold"
    }
  }

  render() {
    return (
      <div className="App">
        <button>New Game</button>
        <h1 className="App-header">Hot or Cold</h1>
        <Game handleHotOrCold={guess => this.hotOrCold(this.state.currentGuess)} handleGuess={guess => this.setGuessList(guess)} />
        <GuessCounter guessList={this.state.guessList} totalGuesses={this.state.guessList.length} />
      </div>
    );
  }
}

export default App;
