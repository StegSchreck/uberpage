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
            gridColumnStart: this.props.gridColumnStart,
            gridColumnEnd: this.props.gridColumnEnd,
            gridRowStart: this.props.gridRow,
            gridRowEnd: this.props.gridRow + 1,
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
        if (item.background_logo) {
            backgroundImageStyle['backgroundImage'] = 'url(/img/' + item.background_logo + ')';
            backgroundImageStyle['backgroundSize'] = item.background_logo_size ? item.background_logo_size : '50%';
        }
        if (item.background_picture) {
            let backgroundImagePrefix = '';
            let backgroundSizePrefix = '';
            if (item.background_logo) {
                backgroundImagePrefix = `${backgroundImageStyle['backgroundImage']}, `;
                backgroundSizePrefix = `${backgroundImageStyle['backgroundSize']}, `;
            }
            backgroundImageStyle['backgroundImage'] = `${backgroundImagePrefix}url(/img/${item.background_picture})`;
            const backgroundSizeSuffix = item.background_picture_size ? item.background_picture_size : 'cover';
            backgroundImageStyle['backgroundSize'] = `${backgroundSizePrefix}${backgroundSizeSuffix}`;
        }
        if (item.title && item.background_logo) {backgroundImageStyle['opacity'] = '0.2'}

        // console.log(`item ${this.props.key} -> c=${this.props.gridColumnStart} r=${this.props.gridRow}`);

        // TODO - handle max text width
        // TODO - show item description as overlay
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
