import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";

const Centered = styled.div`
  width: 10%;
  margin: auto;
  background-color: darkred;
  color: white;
  border: 2px solid grey;
  padding: 20px;
  text-align: center;
  display: inline-block;
  margin: 20px;
`;

const Dimage = styled.img`
  width: 100px;
  height: 100px;
`;

const Score = styled.p`
  font-size: large;
`;

class Dice extends Component {
  state = {
    numberDice: 0,
    showResults: false,
    diceResults: []
  };

  diceRoll(event) {
    const numberOfDice = event.target.value;
    const diceResults = [];
    for (let i = 0; i < numberOfDice; i++) {
      const rollResult = Math.floor(Math.random() * this.props.sides + 1);
      diceResults.push(rollResult);
    }
    this.setState({
      numberDice: numberOfDice,
      diceResults
    });
  }

  reRoll(){
    const diceResults = [];
    for (let i = 0; i < this.state.numberDice; i++) {
      const rollResult = Math.floor(Math.random() * this.props.sides + 1);
      diceResults.push(rollResult);
    }
    this.setState({
      showResults: true,
      diceResults
    })
  }

  showResults() {
    this.setState({
      showResults: true
    });
  }

  hideResults() {
    this.setState({
      showResults: false
    });
  }

  render() {
    return (
      <Centered>
        <Dimage src={this.props.image} />
        <h2>{this.props.title}</h2>
        <select
          onChange={value => this.diceRoll(value)}
          onClick={() => this.hideResults()}
        >
          <option value="-">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <br />
        <Button onClick={() => this.showResults()}>Roll!</Button>
        <br />
        <br />
        {this.state.showResults
          ? this.state.diceResults.map((result, index) => (
              <Score key={index}>{result}</Score>
            ))
          : null}
        {this.state.showResults
          ? <Button onClick={() => this.reRoll()}>Re-Roll?</Button>
          : null}
      </Centered>
    );
  }
}

export default Dice;
