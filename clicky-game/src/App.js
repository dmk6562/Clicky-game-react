// import all dependencies
import React, { Component } from "react";
import Header from './components/Header/Header.js'
import Card from "./components/Card/Card";
import Footer from './components/Footer/Footer'
import Friends from "./friends.json";
import "./App.css";

// sets variables for initial page load
let score = 0;
let topScore = 0;
let message = "Click an image to begin!";

// needs to be class componenet because of private internal state
class App extends Component {

    // set state
    state = {
        Friends,
        score,
        topScore,
        message
    };

    setClicked = id => {

        const Friends = this.state.Friends;

        // creates new array with elements that match
        const clickedMatch = Friends.filter(match => match.id === id);

        // if else statements using true/false
        if (clickedMatch[0].clicked) {
            score = 0;

            // update message
            message = "Sorry! The Image has already been clicked on!"

            // sets friends clicked to false
            for (let i = 0; i < Friends.length; i++) {
                Friends[i].clicked = false;
            }

            // set the new values for state
            this.setState({ message });
            this.setState({ score });
            this.setState({ Friends });

        } else if (score < 11) {

            clickedMatch[0].clicked = true;

            // increment score
            score++;

            // update message
            message = "Awesome! Play on!";

            // sets new top score
            if (score > topScore) {
                topScore = score;
                this.setState({ topScore });
            }

            // returns random image
            Friends.sort(function (a, b) { return 0.5 - Math.random() });

            // setState function
            this.setState({ Friends });
            this.setState({ score });
            this.setState({ message });

        } else {

            clickedMatch[0].clicked = true;

            score = 0;
            topScore = 12;

            // update message
            message = "You are doing great.";

            this.setState({ topScore });

            // sets friends clicked to false
            for (let i = 0; i < Friends.length; i++) {
                Friends[i].clicked = false;
            }

            // returns random image
            Friends.sort(function (a, b) { return 0.5 - Math.random() });

            // setState function
            this.setState({ Friends });
            this.setState({ score });
            this.setState({ message });

        }
    };

    render() {
        return (
            <div>
                <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore} />

                <div className='cardArea'>
                    {this.state.Friends.map(char => (
                        <Card
                            setClicked={this.setClicked}
                            id={char.id}
                            key={char.id}
                            name={char.name}
                            image={char.image}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;