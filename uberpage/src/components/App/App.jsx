import React from 'react';
import './App.css';
import UberTile from '../UberTile/UberTile.jsx';
import data from '../../data.json';

function App() {
  const itemHeight = 100 / (data.items.length + 1);
  const defaultItem = {
      "title": "About this page",
      "background_image": 'UberPage.png',
      "link": "https://github.com/StegSchreck/uberpage",
      "description": "This page was created using the UberPage project."
    };
  return (
    <div className="App">
      {
        data.items.map((item, index) => {
          return <UberTile key={index} item={item} settings={data.settings} height={itemHeight}/>;
        })
      }
      <UberTile key='default' item={defaultItem} settings={data.settings} height={itemHeight}/>
    </div>
  );
}

export default App;
