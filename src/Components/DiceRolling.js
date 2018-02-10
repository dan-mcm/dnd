import React, { Component } from "react";
import styled from "styled-components";
import DiceTable from "./DiceTable";

const Line = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid grey;
`;

class DiceRolling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      type: "",
      number: 0,
      results: []
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(show, type, number, results) {
    console.log("triggered!");
    console.log(show, type, number, results);
    this.setState({
      show,
      type,
      number,
      results
    });
  }

  render() {
    return (
      <div>
        <Line>
          <h2>Dice Rolling</h2>
          <DiceTable/>
        </Line>
      </div>
    );
  }
}

export default DiceRolling;
