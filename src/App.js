// ================ Dependencies ================ //

import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Container from "./Container";
import Column from "./Column";
import Row from "./Row";
import './App.css';


// ================ Functionality ================ //

class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    score: 0,
    friends: friends,
    unselected: friends
  }
  componentDidMount() {

  }

  // Handles shuffling.
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i-- ) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectFriend = friend => {
    const findFriend = this.state.unselected.find(item => item.friend === friend);

    if (findFriend === undefined) {
      // Lose.
      this.setState({
        message: "You lose!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        friends: friends,
        unselected: friends
      });
    } else {
      // Win!
      const newFriends = this.state.unselected.filter(item => item.friend !== friend);

      this.setState({
        message: "You win!",
        score: this.state.score + 1,
        friends: friends,
        unselected: newFriends
      });
    }

    this.shuffleArray(friends);
  };
 
  render() {
    return (
      <Wrapper>
        <Navbar 
           title="Clicky Game"
           score={this.state.score}
           topScore={this.state.topScore}
           />
          <Title>
            Try to click on each image, but don't hit any duplicates!
          </Title>

          <Container>
            <Row>
              {this.state.friends.map(friend => (
                <Column size="md-3 sm-6">
                  <FriendCard
                    friend={friends.friend}
                    image={friends.image}
                    selectFriend={this.selectFriend}
                    score={this.state.score}
                    />
                </Column>
              ))};
            </Row>
          </Container>
      </Wrapper>
    );
  };
};

export default App;
