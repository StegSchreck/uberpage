import React from 'react';
import ReactDOM from 'react-dom';
import UberTile from './UberTile.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UberTile item={{}} settings={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
