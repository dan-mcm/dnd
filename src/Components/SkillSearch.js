import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from 'antd';

const FullLength = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  background-color: black;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding-top: 25px;
  padding-bottom: 25px;
`

const Line = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: auto;
`

class SkillSearch extends Component {
  render() {
    return (
      <FullLength>
        <Line>
          <h2>Skill Search</h2>
          <p>Search skill descriptions using one or more criteria</p>
          <select onChange={(value) => console.log(value)}>
            <option value="Class">Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select onChange={(value) => console.log(value)}>
            <option value="Level">Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select onChange={(value) => console.log(value)}>
            <option value="Name">Skill Name</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button>Search</Button>
        </Line>

      </FullLength>
    );
  }
}

export default SkillSearch;
