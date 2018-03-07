import React, { Component } from "react";
import styled from "styled-components";
import DiceTable from "./DiceTable";

const TableCard = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  background-color: black;
  padding: 15px;
  max-width: 980px;
  margin: 0 auto;
`;

const Main = styled.div`
  background-color: black;
  border-bottom: 2px solid grey;
`
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
      <Main>
        <TableCard>
          <h2>Dice Rolling</h2>
          <DiceTable/>
        </TableCard>
      </Main>
    );
  }
}

export default DiceRolling;
