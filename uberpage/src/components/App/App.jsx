import React from 'react';
import './App.css';
import UberTile from '../UberTile/UberTile.jsx';
import data from '../../data.json';

function App() {
  const defaultItem = {
    "title": "About this page",
    "background_image": 'UberPage.png',
    "link": "https://github.com/StegSchreck/uberpage",
    "description": "This page was created using the UberPage project."
  };
  data.items.push(defaultItem);

  // TODO 1 - handle odd number of items --> last items gets two columns width
  // TODO 2 - set max number of columns depending on viewport width

  function calculateNumberOfColumns() {
    if (data.items.length <= 3) {
      return 1;
    }
    if (data.items.length <= 8) {
      return 2;
    }
    return 3;
  }

  const numberOfColumns = calculateNumberOfColumns();
  const numberOfRows = Math.ceil(data.items.length / numberOfColumns);
  const itemHeight = 100 / numberOfRows;
  const itemWidth = 100 / numberOfColumns;
  const gridStyle = { gridTemplateColumns: 'auto '.repeat(numberOfColumns) };

  return (
    <div className="App" style={gridStyle}>
      {
        data.items.map((item, index) => {
          const gridColumn = index % numberOfColumns + 1;
          const gridRow = Math.floor(index / numberOfColumns + 1);
          return <UberTile key={index} item={item} settings={data.settings} height={itemHeight} width={itemWidth} gridColumn={gridColumn} gridRow={gridRow}/>;
        })
      }
    </div>
  );
}

export default App;
