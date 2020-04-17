import React from 'react';
import './App.css';
import UberPage from '../UberPage/UberPage';
import data from '../../data';

function App() {
  const defaultItem = {
    link: 'https://github.com/StegSchreck/uberpage',
    title: 'About this page',
    description: 'This page was created using the UberPage project.',
    background_logo: 'UberPage.svg',
    background_logo_size: '75%',
  };
  if (data.settings.default_item === undefined || data.settings.default_item) {
    data.items.push(defaultItem);
  }
  return (
    <div className="App">
      <UberPage items={data.items} settings={data.settings}/>
    </div>
  );
}

export default App;
