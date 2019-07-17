import React from 'react';
import './UberTile.css';

class UberTile extends React.Component {
    render() {
        const item = this.props.item;
        const settings = this.props.settings;
        const itemHeight = this.props.height;
        const itemWidth = this.props.width || 100;
        const linkStyle = {};
        const tileStyle = {
            height: itemHeight + 'vh',
            minHeight: itemHeight + 'vh',
            maxHeight: itemHeight + 'vh',
            width: itemWidth + 'vw',
            minWidth: itemWidth + 'vw',
            maxWidth: itemWidth + 'vw',
            gridColumnStart: this.props.gridColumn,
            gridColumnEnd: this.props.gridColumn,
            gridRowStart: this.props.gridRow,
            gridRowEnd: this.props.gridRow,
        };
        const backgroundImageStyle = {
            ...tileStyle,
        };
        const fontSize = itemHeight / 5;
        const textPosition = itemHeight / 2 + fontSize / 2;
        const textStyle = {
            ...tileStyle,
            marginTop: `-${textPosition}vh`,
            fontSize: `${fontSize}vh`,
        };

        if (item.background_color) {backgroundImageStyle['backgroundColor'] = item.background_color}
        if (item.text_color) {textStyle['color'] = item.text_color}

        if (item.background_image) {backgroundImageStyle['backgroundImage'] = 'url(/img/' + item.background_image + ')';}
        if (item.background_size) {backgroundImageStyle['backgroundSize'] = item.background_size;}
        if (item.title && item.background_image) {backgroundImageStyle['opacity'] = '0.2'}

        // TODO 1 - handle max text width
        // TODO 2 - show item description as overlay
        return (
          <div className="UberTile" style={tileStyle}>
              <a className="UberTile-link" href={item.link} title={item.description} target={settings.default_link_target} style={linkStyle}>
                  <div className="UberTile-background-image" style={backgroundImageStyle}/>
                  <div className="UberTile-text" style={textStyle}>{item.title}</div>
              </a>
          </div>
        );
    }
}

export default UberTile;
