import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import DiceRow from '../Components/DiceRow';
import D4 from "../Images/D4.png";
import DiceTable from '../Components/DiceTable';
import Dice from '../Components/Dice';

jest.mock('react-dom');
it('Main app component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
