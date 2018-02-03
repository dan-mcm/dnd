import React, { Component } from 'react';
import Header from './Components/Header';
import DiceRolling from './Components/DiceRolling';
import SpellSearch from './Components/SpellSearch';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SpellSearch />
        <DiceRolling />
        <Footer />
      </div>
    );
  }
}

export default App;
