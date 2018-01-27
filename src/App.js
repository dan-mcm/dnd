import React, { Component } from 'react';
import Spacer from './Components/Spacer';
import Header from './Components/Header';
import DiceRolling from './Components/DiceRolling';
import SkillSearch from './Components/SkillSearch';
import SpellSearch from './Components/SpellSearch';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SpellSearch />

        <Spacer />
        <DiceRolling />
        <Footer />
      </div>
    );
  }
}

export default App;
