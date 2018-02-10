import React, { Component } from "react";
import styled from "styled-components";
import stained from "../Images/stained.jpg";

const Container = styled.div`
  max-width: 580px;
  width: 60%;
  text-align: left;
  color: black;
  background-image: url(${stained});
  border: 2px solid grey;
  padding: 25px;
  margin: auto;
  white-space: pre-line;
  h2 {
    text-align: center;
  }
  h3 {
    border-bottom: 1px solid darkred;
  }
  table {
    text-align: center;
    margin: auto;
    border-collapse: collapse;
  }
  th {
    color: darkred;
    font-weight: bold;
    padding: 5px;
    border: 2px solid grey;
  }
  td {
    border: 2px solid grey;
    padding: 5px;
    :hover {
      background-color: white;
    }
  }
`;

class Spell extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2>{this.props.details[0]}</h2>
          <table>
            <tr>
              <th>Level</th>
              <th>Type</th>
              <th>Casting Time</th>
              <th>Range</th>
            </tr>
            <tr>
              <td>{this.props.details[1]}</td>
              <td>{this.props.details[2]}</td>
              <td>{this.props.details[3]}</td>
              <td>{this.props.details[4]}</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <th>Components</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>{this.props.details[5]}</td>
              <td>{this.props.details[6]}</td>
            </tr>
          </table>
          <h3>Description:</h3>
          <p>{this.props.details[7].split(".").join(". \n")}</p>
        </Container>
      </div>
    );
  }
}

export default Spell;
