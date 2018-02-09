import React, { Component } from "react";
import Dice from "./Dice";
import styled from "styled-components";
import DiceResult from "./DiceResult";

import D4 from "../Images/D4.png";
import D6 from "../Images/D6.png";
import D8 from "../Images/D8.png";
import D10 from "../Images/D10.png";
import D12 from "../Images/D12.png";
import D20 from "../Images/D20.png";

const Line = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
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
          <br />
          <Dice image={D4} title="D4" sides={4} update={this.updateState} />
          <Dice image={D6} title="D6" sides={6} update={this.updateState} />
          <Dice image={D8} title="D8" sides={8} update={this.updateState} />
          <Dice image={D10} title="D10" sides={10} update={this.updateState} />
          <Dice image={D12} title="D12" sides={12} update={this.updateState} />
          <Dice image={D20} title="D20" sides={20} update={this.updateState} />
        </Line>
        {this.state.show ? (
          <div>
            <br />
            <DiceResult
              show={this.state.show}
              type={this.state.type}
              number={this.state.number}
              results={this.state.results}
            />
            <br />
          </div>
        ) : null}
      </div>
    );
  }
}

export default DiceRolling;
