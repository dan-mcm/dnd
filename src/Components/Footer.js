import React, { Component } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import dnd from "../Images/dnd.png";

const Banner = styled.div`
  background-color: darkred;
  color: white;
  font-size: large;
  width: 100%;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 2px solid grey;
`;

class Footer extends Component {
  render() {
    return (
      <Banner>
        <p>&copy; Daniel McMahon 2018</p>
      </Banner>
    );
  }
}

export default Footer;
