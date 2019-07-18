import React from 'react';
import './App.css';
import UberTile from '../UberTile/UberTile.jsx';
import data from '../../data.json';

function App() {
  const defaultItem = {
    "link": "https://github.com/StegSchreck/uberpage",
    "title": "About this page",
    "description": "This page was created using the UberPage project.",
    "background_logo": 'UberPage.png',
    "background_logo_size": "75%"
  };
  data.items.push(defaultItem);

  // TODO - set max number of columns depending on viewport width

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
  let itemWidth = 100 / numberOfColumns;
  const gridStyle = { gridTemplateColumns: 'auto '.repeat(numberOfColumns) };
  const emptySlots = (numberOfColumns * numberOfRows) - data.items.length;
  // console.log(`${data.items.length} items -> c=${numberOfColumns} r=${numberOfRows} -> ${emptySlots} empty slots   #   ${JSON.stringify(gridStyle)}`);

  return (
    <div className="App" style={gridStyle}>
      {
        data.items.map((item, index) => {
          const gridColumnStart = index % numberOfColumns + 1;
          const gridRow = Math.floor(index / numberOfColumns + 1);
          const isLastItem = index + 1 === data.items.length;
          // console.log(`index=${index} ${isLastItem}`);
          const gridColumnEnd = isLastItem ? gridColumnStart + (emptySlots + 1) : gridColumnStart + 1;
          itemWidth = isLastItem ? itemWidth * (emptySlots + 1) : itemWidth;
          return <UberTile key={index} item={item} settings={data.settings} height={itemHeight} width={itemWidth} gridColumnStart={gridColumnStart} gridColumnEnd={gridColumnEnd} gridRow={gridRow}/>;
        })
      }
    </div>
  );
}

export default App;
