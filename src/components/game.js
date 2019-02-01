import React from 'react';

export default function Game(props) {
    return (
        <div>
            <h2>{props.handleHotOrCold()}</h2>
            <form onSubmit={e => {
                e.preventDefault()
                if (e.target.userGuess.value <= 100 && e.target.userGuess.value >= 1) {
                    props.handleGuess(e.target.userGuess.value)
                }
                else{alert('You must pick a number between 1 & 100!')}
                
                e.target.userGuess.value = "Enter Your Guess"
            }}>

                <input type="number" placeholder="Enter Your Guess" name="userGuess" />
                <input type="submit" value="Guess" />
            </form>
        </div>
    );
} 