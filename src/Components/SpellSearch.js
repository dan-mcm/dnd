import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";
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

const Result = styled.div`
  border-bottom: 2px solid grey;
  min-height: 300px;
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
    });
  };

  searchByName = () => {
    for (let i = 0; i < fifthspells.length; i++) {
      if (fifthspells[i].name === this.state.spellQuery) {
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
      <div>
      <FullLength>
        <Line>
          <h2>Spell Search</h2>
          <p>Search for spells</p>
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
            {fifthspells.map(spell => (
              <option key={spell.name} value={spell.name}>
                {spell.name}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.searchByName}>Search</Button>
          <br />
          <br />
        </Line>
        </FullLength>
        <Result>
          {this.state.showSpell ? (
            <div>
            <br />
            <Spell details={this.state.foundSpell} />
            <br />
            </div>
          ) : null}
        </Result>
      </div>
    );
  }
}

export default SpellSearch;
