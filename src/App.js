import React, { Component } from 'react';
import Header from './Components/Header';
import DiceRolling from './Components/DiceRolling';
import Footer from './Components/Footer';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <DiceRolling />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
