import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { spells } from "../Data/spells";
import Spell from "./Spell";
import fifthspells from "../Data/5e-spells";

const FullLength = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  background-color: black;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const Line = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  background-color: black;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: auto;
`;

class SpellSearch extends Component {
  state = {
    spellQuery: false,
    foundSpell: [],
    showSpell: false
  };

  spellQuery = query => {
    this.setState({
      spellQuery: query
    });
  };

  searchByName = () => {
    console.log('Searching for', this.state.spellQuery, '...')
    for (let i = 0; i < fifthspells.length; i++) {
      console.log(fifthspells[i].name)
      if (fifthspells[i].name === this.state.spellQuery) {
        console.log('HIT=', fifthspells[i].name);
        let output = [];
        output.push(fifthspells[i].name);
        output.push(fifthspells[i].level);
        output.push(fifthspells[i].school);
        output.push(fifthspells[i].casting_time);
        output.push(fifthspells[i].range);
        output.push(fifthspells[i].components);
        output.push(fifthspells[i].duration);
        output.push(fifthspells[i].description);
        this.setState({ foundSpell: output, showSpell: true });
      }
    }
  };

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
          <select onChange={event => this.spellQuery(event.target.value)}>
            <option value="Name">Name</option>
            {fifthspells.map(spell => <option key={spell.name} value={spell.name}>{spell.name}</option>)}

          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={this.searchByName}>Search</Button>
          <br />
          <br />
          {this.state.showSpell ? (
            <Spell details={this.state.foundSpell} />
          ) : null}
        </Line>
      </FullLength>
    );
  }
}

export default SpellSearch;
