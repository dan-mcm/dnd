import React, { Component } from 'react';
import Dice from './Dice';
import styled from 'styled-components';

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
`

class DiceRolling extends Component {
  render() {
    return (
      <Line>
        <h2>Dice Rolling</h2>
        <br/>
          <Dice image={D4} title="D4" sides={4}/>
          <Dice image={D6} title="D6" sides={6}/>
          <Dice image={D8} title="D8" sides={8}/>
          <Dice image={D10} title="D10" sides={10}/>
          <Dice image={D12} title="D12" sides={12}/>
          <Dice image={D20} title="D20" sides={20}/>
      </Line>
    );
  }
}

export default DiceRolling;
