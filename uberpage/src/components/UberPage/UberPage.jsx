import React from 'react';
import './UberPage.css';
import UberTile from '../UberTile/UberTile.jsx';

class UberPage extends React.Component {
  state = {
    pageWidth: window.innerWidth
  };
  render() {
    const items = this.props.items;
    const settings = this.props.settings;
    function calculateNumberOfColumns() {
      if (items.length <= 3 || window.innerWidth < 450) {
        return 1;
      }
      if (items.length <= 8 || window.innerWidth < 800) {
        return 2;
      }
      return 3;
    }
    window.onresize = () => this.setState({pageWidth: window.innerWidth});

    const numberOfColumns = calculateNumberOfColumns();
    const numberOfRows = Math.ceil(items.length / numberOfColumns);
    const itemHeight = 100 / numberOfRows;
    let itemWidth = 100 / numberOfColumns;
    const gridStyle = {gridTemplateColumns: 'auto '.repeat(numberOfColumns)};
    const emptySlots = (numberOfColumns * numberOfRows) - items.length;

    return (
      <div className="UberPage" style={gridStyle}>
        {
          items.map((item, index) => {
            const gridColumnStart = (index % numberOfColumns) + 1;
            const gridRow = Math.floor((index / numberOfColumns) + 1);
            const isLastItem = index + 1 === items.length;
            const gridColumnEnd = isLastItem ? gridColumnStart + (emptySlots + 1) : gridColumnStart + 1;
            itemWidth = isLastItem ? itemWidth * (emptySlots + 1) : itemWidth;
            return (
              <UberTile
                key={index}
                item={item}
                settings={settings}
                height={itemHeight}
                width={itemWidth}
                gridColumnStart={gridColumnStart}
                gridColumnEnd={gridColumnEnd}
                gridRow={gridRow}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UberPage;
