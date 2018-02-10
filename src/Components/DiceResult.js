import React, { Component } from "react";
import styled from "styled-components";
import stained from "../Images/stained.jpg";

const Container = styled.div`
  max-width: 580px;
  width: 60%;
  text-align: center;
  color: black;

  background-image: url(${stained});
  border: 2px solid grey;
  padding: 25px;
  margin: auto;
  font-size: large;
`;

class DiceResult extends Component {
  render() {
    return (
      <Container>
        <h2>Roll Results</h2>
        <p>{this.props.type} x {this.props.number}</p>
        {this.props.show
          ? this.props.results.join(' - ')
          : null}
        {this.props.show ? (
          <div>
            <p>
              <b><u>Total:{" "}
              {this.props.results.length > 0 ? (this.props.results.reduce(function(a, b) {
                return a + b;
              })) : 'Zero! Need to select a minimum of 1 Dice...'

              }
              </u></b>
            </p>
          </div>
        ) : null}
      </Container>
    );
  }
}

export default DiceResult;
