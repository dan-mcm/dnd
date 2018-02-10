import React, { Component } from "react";
import styled from "styled-components";
import DiceRow from './DiceRow';

import D4 from "../Images/D4.png";
import D6 from "../Images/D6.png";
import D8 from "../Images/D8.png";
import D10 from "../Images/D10.png";
import D12 from "../Images/D12.png";
import D20 from "../Images/D20.png";

const Centered = styled.div`
  width: 80%;
  margin: auto;
  background-color: darkred;
  color: white;
  border: 2px solid grey;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  table {
    text-align: center;
    margin: auto;
    border-collapse: collapse;
  }
  th {
    color: white;
    font-weight: bold;
    padding: 5px;
    border: 2px solid grey;
  }
  td {
    border: 2px solid grey;
    padding: 5px;
    img{
      width: 50px;
      height: 50px;
    }
    input{
      width: 50px;
    }
`;

class DiceTable extends Component {
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
        <table>
          <tr>
            <th>Dice</th>
            <th>Number</th>
            <th>Modifier</th>
            <th>Roll</th>
            <th>Rolled</th>
            <th>Total</th>
          </tr>
          <DiceRow diceImage={D4} sides={4}/>
          <DiceRow diceImage={D6} sides={6}/>
          <DiceRow diceImage={D8} sides={8}/>
          <DiceRow diceImage={D10} sides={10}/>
          <DiceRow diceImage={D12} sides={12}/>
          <DiceRow diceImage={D20} sides={20}/>
        </table>

      </Centered>
    );
  }
}

export default DiceTable;
