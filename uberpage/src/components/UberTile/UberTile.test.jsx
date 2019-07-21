import React from 'react';
import ReactDOM from 'react-dom';
import UberTile from './UberTile.jsx';

describe('UberTile Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UberTile item={{}} settings={{}} height={100} width={100} gridColumnStart={1} gridColumnEnd={2} gridRow={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders single item correctly', () => {
    const defaultItem = {
      link: 'https://github.com/StegSchreck/uberpage',
      title: 'About this page',
      description: 'This page was created using the UberPage project.',
      background_logo: 'UberPage.png',
      background_logo_size: '75%',
    };
    const div = document.createElement('div');
    ReactDOM.render(<UberTile item={defaultItem} settings={{}} height={100} width={100} gridColumnStart={1} gridColumnEnd={2} gridRow={1} />, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');

    expect(uberTiles.length).toBe(1);
    expect(uberTiles[0].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 100vh; min-height: 100vh; max-height: 100vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[0].getElementsByClassName('UberTile-link')[0].attributes[1].value).toBe(defaultItem.link);
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo_size));
    expect(uberTiles[0].getElementsByClassName('UberTile-title')[0].getElementsByTagName('span')[0].textContent).toBe(defaultItem.title);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders single item for second row', () => {
    const defaultItem = {
      link: 'https://github.com/StegSchreck/uberpage',
      title: 'About this page',
      text_color: '#ff0000',
      description: 'This page was created using the UberPage project.',
      background_logo: 'UberPage.png',
      background_logo_size: '75%',
      background_picture: 'UberPage.png',
      background_picture_size: 'cover',
      background_color: 'white',
    };
    const div = document.createElement('div');
    ReactDOM.render(<UberTile item={defaultItem} settings={{}} height={50} width={100} gridColumnStart={1} gridColumnEnd={3} gridRow={2} />, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');

    expect(uberTiles.length).toBe(1);
    expect(uberTiles[0].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 50vh; min-height: 50vh; max-height: 50vh; grid-column-start: 1; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;');
    expect(uberTiles[0].getElementsByClassName('UberTile-link')[0].attributes[1].value).toBe(defaultItem.link);
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes('opacity: 0.2'));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_color));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo_size));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_picture));
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_picture_size));
    expect(uberTiles[0].getElementsByClassName('UberTile-title')[0].attributes[1].value.includes(defaultItem.text_color));
    expect(uberTiles[0].getElementsByClassName('UberTile-title')[0].getElementsByTagName('span')[0].textContent).toBe(defaultItem.title);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders minimalisitc item tile', () => {
    const defaultItem = {};
    const div = document.createElement('div');
    ReactDOM.render(<UberTile item={defaultItem} settings={{}} height={100} width={100} gridColumnStart={1} gridColumnEnd={2} gridRow={1} />, div);
    const uberTiles = ReactDOM.findDOMNode(div).getElementsByClassName('UberTile');

    expect(uberTiles.length).toBe(1);
    expect(uberTiles[0].attributes[1].value).toBe('width: 100vw; min-width: 100vw; max-width: 100vw; height: 100vh; min-height: 100vh; max-height: 100vh; grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;');
    expect(uberTiles[0].getElementsByClassName('UberTile-link')[0].attributes[1]).toBe(undefined);
    expect(uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes('opacity: 0.2'));
    expect(!uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_color));
    expect(!uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo));
    expect(!uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_logo_size));
    expect(!uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_picture));
    expect(!uberTiles[0].getElementsByClassName('UberTile-background-image')[0].attributes[1].value.includes(defaultItem.background_picture_size));
    expect(!uberTiles[0].getElementsByClassName('UberTile-title')[0].attributes[1].value.includes(defaultItem.text_color));
    expect(uberTiles[0].getElementsByClassName('UberTile-title')[0].getElementsByTagName('span')[0].textContent).toBe('');
    ReactDOM.unmountComponentAtNode(div);
  });
});
