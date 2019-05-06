import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Description from "./components/Description";

var clickedPics = [];
var score = 0;
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  clickPic = id => {
    console.log(clickedPics);
    var matches = 0;
    for (var i = 0; i < clickedPics.length; i++) {
      if (id === clickedPics[i]) {
        matches++;
      }
    }
    if (matches > 0) {
      alert("You Lose! Game is now resetting!");
      clickedPics = [];
      score = 0;
      friends.sort(() => Math.random() - 0.5);
      this.setState({ friends });
    } else {
      score++;
      clickedPics.push(id);
      friends.sort(() => Math.random() - 0.5);
      this.setState({ friends });
    }
    if(clickedPics.length === 12){
      alert("You Win! Game is now resetting!");
      clickedPics = [];
      score = 0;
      friends.sort(() => Math.random() - 0.5);
      this.setState({ friends });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Marvel Memory Madness</Title>
        <Description>Click a hero, and the pictures will shuffle. Don't click the same hero twice!</Description>
        <Description>Score: {score}</Description>
        {this.state.friends.map(friend => (
          <FriendCard
            clickPic={this.clickPic}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
