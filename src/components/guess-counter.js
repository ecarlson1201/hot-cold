import React from 'react';

export default function GuessCounter(props) {
    const guessList = props.guessList.map((guess, index) =>
        <li key={index}>{guess}</li>        
    )
    return (
        <div>
            <h3>Total Guesses: {props.totalGuesses}</h3>
            <ul>{guessList}</ul>
        </div>
    );
}