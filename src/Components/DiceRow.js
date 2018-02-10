import React, { Component } from "react";
import { Button } from "antd";

class DiceRow extends Component {
  state = {
    numberDice: 0,
    showResults: false,
    diceResults: [],
    modifier: 0,
    total: 0
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

  roll() {
    const diceResults = [];
    let total = 0;
    for (let i = 0; i < this.state.numberDice; i++) {
      const rollResult = Math.floor(Math.random() * this.props.sides + 1);
      diceResults.push(rollResult);
      total += rollResult
    }

    total += parseInt(this.state.modifier, 10);

    this.setState({
      showResults: true,
      diceResults,
      total
    });

    // this.props.update(
    //   this.state.showResults,
    //   this.props.title,
    //   this.state.numberDice,
    //   this.state.diceResults
    // );
  }
  hideResults(){
    this.setState({
      showResults: false
    })

  }

  setModifier(event){
    console.log('modifier is', event.target.value);
    this.setState({
      modifier: event.target.value
    });
  }

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.diceImage} alt={this.props.sides+1}/>
        </td>
        <td>
          <select onChange={value => this.getResults(value)} onClick={() => this.hideResults()}>
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
          </select> x d{this.props.sides}
        </td>
        <td>
        <select onChange={value => this.setModifier(value)} onClick={() => this.hideResults()}>
          <option value="0">0</option>
          <option value="+1">+1</option>
          <option value="+2">+2</option>
          <option value="+3">+3</option>
          <option value="+4">+4</option>
          <option value="+5">+5</option>
          <option value="-1">-1</option>
          <option value="-2">-2</option>
          <option value="-3">-3</option>
          <option value="-4">-4</option>
          <option value="-5">-5</option>
        </select>
        </td>
        <td>
          <Button
            onClick={() => {
              this.roll();
            }}
          >
            Roll!
          </Button>
        </td>
        <td>
          {this.state.diceResults.length > 0 && this.state.showResults
            ? this.state.diceResults.join(" - ")
            : ""}
        </td>
        <td>
          {this.state.diceResults.length > 0 && this.state.showResults
            ? this.state.total
            : ""}
        </td>
      </tr>
    );
  }
}

export default DiceRow;
