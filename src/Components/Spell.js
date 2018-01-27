import React, { Component } from "react";
import styled from 'styled-components'

const Container = styled.div`
  width: 60%;
  text-align: center;
  color: white;
  background-color: darkred;
  border: 2px solid grey;
  padding: 25px;
  margin: auto;
`
class Spell extends Component {
  render() {
    return (
      <Container>
        {console.log(this.props)}
        <h2>{this.props.details[0]}</h2>
        <p>Level: {this.props.details[1]}</p>
        <p>Type: {this.props.details[2]}</p>
        <p>Time to Cast: {this.props.details[3]} action</p>
        <p>Range: {this.props.details[4]} feet</p>
        <p>Components Required: {this.props.details[5]}</p>
        <p>Duration: {this.props.details[6]} minutes</p>
        <p>Description: {this.props.details[7]}</p>
      </Container>
    );
  }
}

export default Spell;
