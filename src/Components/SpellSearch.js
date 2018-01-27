import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from 'antd';
import { spells } from '../Data/spells';
import Spell from './Spell';

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

class SpellSearch extends Component {
  state = {
    spellQuery: false,
    foundSpell: [],
    showSpell: false
  };

  spellQuery = query => {
    this.setState({
      spellQuery: query
    })
  }

  searchByName = () => {
      for(let i = 0; i < spells.length; i++){
        if(spells[i].spell === this.state.spellQuery){
          let output = [];
          output.push(spells[i].spell)
          output.push(spells[i].level)
          output.push(spells[i].type)
          output.push(spells[i].time)
          output.push(spells[i].range)
          output.push(spells[i].components)
          output.push(spells[i].duration)
          output.push(spells[i].description)
          this.setState({ foundSpell: output, showSpell: true })}
        }
      }

  render() {
    return (
      <FullLength>
        <Line>
          <h2>Spell Search</h2>
          <p>Search spells using one or more criteria</p>
          {/*}
          <select onChange={(event) => console.log(event.target.value)}>
            <option value="Level">Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select onChange={(event) => console.log(event.target.value)}>
            <option value="Type">Type</option>
            <option value="Enchantment">Enchantment</option>
            <option value="Evocation">Evocation</option>
            <option value="Divination">Divination</option>
            <option value="Illusion">Illusion</option>
            <option value="Necromancy">Necromancy</option>
            <option value="Abjuration">Abjuration</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          */}

          <select onChange={(event) => this.spellQuery(event.target.value)}>
            <option value="Name">Name</option>
            {spells.map(spell => <option key={spell.spell} value={spell.spell}>{spell.spell}</option>)}
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={this.searchByName}>Search</Button>
          <br />
          <br />
          {(this.state.showSpell) ? <Spell details={this.state.foundSpell}/> : null}
        </Line>

      </FullLength>
    );
  }
}

export default SpellSearch;
