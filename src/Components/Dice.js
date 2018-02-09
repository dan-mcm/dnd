import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'antd';
import DiceResult from './DiceResult';

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
    showResults: true,
    diceResults: []
  };

  getResults(event) {
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

  roll(){
    const diceResults = [];
    for (let i = 0; i < this.state.numberDice; i++) {
      const rollResult = Math.floor(Math.random() * this.props.sides + 1);
      diceResults.push(rollResult);
    }

    this.setState({
      showResults: true,
      diceResults,
    })

    this.props.update(this.state.showResults, this.props.title, this.state.numberDice, this.state.diceResults);
  }

  render() {
    return (
      <Centered>
        <Dimage src={this.props.image} />
        <h2>{this.props.title}</h2>
        <select
          onChange={value => this.getResults(value)}
        >
          <option value="-">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <br />

          <Button onClick={() => {this.roll()}}>Roll?</Button>

        <br />
        <br />

      </Centered>
    );
  }
}

export default Dice;
