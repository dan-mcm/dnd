import React, { Component } from "react";
import styled from 'styled-components'

const FullLength = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
  font-size: 75px;
  color: white;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding-top: 25px;
  padding-bottom: 25px;
`
class Spacer extends Component {
  render() {
    return (
      <FullLength>
      </FullLength>
    );
  }
}

export default Spacer;
