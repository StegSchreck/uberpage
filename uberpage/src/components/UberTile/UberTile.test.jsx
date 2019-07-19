import React from 'react';
import ReactDOM from 'react-dom';
import UberTile from './UberTile.jsx';

describe('UberTile Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UberTile item={{}} settings={{}} height={100} width={100} gridColumnStart={1} gridColumnEnd={2} gridRow={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
