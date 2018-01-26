import React, { Component } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import dnd from "../Images/dnd.png";

const Banner = styled.div`
  color: white;
  width: 100%;
  background-color: darkred;
  font-size: 30px;
  border-bottom: 2px solid grey;
  text-align: center;
  display: inline-block;
  margin: auto;
  line-height: 200px;
`;

const ImageLeft = styled.img`
  width: 200px;
  height: 200px;
  float: left;
  padding-left: 25px;
`;

const ImageRight = styled.img`
  width: 200px;
  height: 200px;
  float: right;
  padding-right: 25px;
`;

const Title = styled.h1``;
class Header extends Component {
  render() {
    return (
      <Banner>
        <h1><ImageLeft src={dnd}/>
        DM's Toolkit
        <ImageRight src={dnd}/></h1>
      </Banner>
    );
  }
}

export default Header;
