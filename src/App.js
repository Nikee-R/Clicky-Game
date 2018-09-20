// ================ Dependencies ================ //

import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
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
}

export default App;
