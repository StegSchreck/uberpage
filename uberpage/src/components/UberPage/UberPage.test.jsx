import React from 'react';
import ReactDOM from 'react-dom';
import UberPage from './UberPage.jsx';
import * as data from '../../data';

describe('UberPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={[]} settings={{}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders no tiles if data contains no items', () => {
    data.default = {
      items: [],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');

    expect(uberTiles.length).toBe(0);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 1 tile if data contains 1 item', () => {
    data.default = {
      items: [{title: 'item1'}],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');

    expect(uberTiles.length).toBe(1);
    expect(uberTiles[0].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 100vh; min-height: 100vh; max-height: 100vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 4 tiles in 2 columns if data contains 4 items', () => {
    data.default = {
      items: [{title: 'item1'}, {title: 'item2'}, {title: 'item3'}, {title: 'item4'}],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');
    expect(uberTiles.length).toBe(4);
    expect(uberTiles[0].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 50vh; min-height: 50vh; max-height: 50vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[1].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 50vh; min-height: 50vh; max-height: 50vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[2].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 50vh; min-height: 50vh; max-height: 50vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[3].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 50vh; min-height: 50vh; max-height: 50vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 3 tiles in 1 column if data contains 3 items', () => {
    data.default = {
      items: [{title: 'item1'}, {title: 'item2'}, {title: 'item3'}],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');
    expect(uberTiles.length).toBe(3);
    expect(uberTiles[0].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[1].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[2].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 3; grid-row-end: 4;');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 9 tiles in 3 column if data contains 9 items', () => {
    data.default = {
      items: [{title: 'item1'}, {title: 'item2'}, {title: 'item3'}, {title: 'item4'}, {title: 'item5'}, {title: 'item6'}, {title: 'item7'}, {title: 'item8'}, {title: 'item9'}],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');
    expect(uberTiles.length).toBe(9);
    expect(uberTiles[0].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[1].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[2].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 3; grid-column-end: 4; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[3].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[4].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[5].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 3; grid-column-end: 4; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[6].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 3; grid-row-end: 4;');
    expect(uberTiles[7].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 3; grid-row-end: 4;');
    expect(uberTiles[8].attributes[1].value).toBe('width: 33.333333333333336vw; min-width: 33.333333333333336vw; max-width: 33.333333333333336vw; height: 33.333333333333336vh; min-height: 33.333333333333336vh; max-height: 33.333333333333336vh; grid-column-start: 3; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4;');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 7 tiles in 2 column if data contains 7 items', () => {
    data.default = {
      items: [{title: 'item1'}, {title: 'item2'}, {title: 'item3'}, {title: 'item4'}, {title: 'item5'}, {title: 'item6'}, {title: 'item7'}],
      settings: {
        default_link_target: '_blank'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<UberPage items={data.default.items} settings={data.default.settings}/>, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');
    expect(uberTiles.length).toBe(7);
    expect(uberTiles[0].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[1].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[2].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[3].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[4].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 3; grid-row-end: 4;');
    expect(uberTiles[5].attributes[1].value).toBe('width: 50vw; min-width: 50vw; max-width: 50vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 2; grid-column-end: 3; grid-row-start: 3; grid-row-end: 4;');
    expect(uberTiles[6].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 25vh; min-height: 25vh; max-height: 25vh; grid-column-start: 1; grid-column-end: 3; grid-row-start: 4; grid-row-end: 5;');
    ReactDOM.unmountComponentAtNode(div);
  });
});
