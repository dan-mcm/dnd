import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Dice from '../Components/Dice';
import D4 from "../Images/D4.png";
import D6 from "../Images/D6.png";
import D8 from "../Images/D8.png";
import D10 from "../Images/D10.png";
import D12 from "../Images/D12.png";
import D20 from "../Images/D20.png";
import D100 from "../Images/D100.png";

//TODO -> inspect snapshot results

it('Renders a D4 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D4} title={"D4"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D6 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D6} title={"D6"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D8 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D8} title={"D8"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D10 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D10} title={"D10"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D12 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D12} title={"D12"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D20 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D20} title={"D20"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('Renders a D100 Dice component snapshot', () => {
  const tree = renderer.create(<Dice image={D100} title={"D100"}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});
