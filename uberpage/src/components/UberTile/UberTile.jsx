import React from 'react';
import './UberTile.css';

class UberTile extends React.Component {
  render() {
    const item = this.props.item;
    const settings = this.props.settings;
    const itemHeight = this.props.height;
    const itemWidth = this.props.width || 100;
    const widthStyle = {
      width: `${itemWidth}vw`,
      minWidth: `${itemWidth}vw`,
      maxWidth: `${itemWidth}vw`,
    };
    const heightStyle = {
      height: `${itemHeight}vh`,
      minHeight: `${itemHeight}vh`,
      maxHeight: `${itemHeight}vh`,
    };
    const gridStyle = {
      gridColumnStart: this.props.gridColumnStart,
      gridColumnEnd: this.props.gridColumnEnd,
      gridRowStart: this.props.gridRow,
      gridRowEnd: this.props.gridRow + 1,
    };
    const tileStyle = {
      ...widthStyle,
      ...heightStyle,
      ...gridStyle,
    };
    const backgroundImageStyle = {
      ...widthStyle,
      ...heightStyle,
      ...gridStyle,
    };
    const titleStyle = {
      ...widthStyle,
      ...heightStyle,
      ...gridStyle,
      lineHeight: `${itemHeight}vh`,
      marginTop: `-${itemHeight}vh`,
      fontSize: `${itemHeight / 7}vh`,
    };
    const descriptionStyle = {
      ...widthStyle,
      ...heightStyle,
      ...gridStyle,
      lineHeight: `${itemHeight}vh`,
      marginTop: `-${itemHeight}vh`,
      fontSize: `${itemHeight / 15}vh`,
    };

    if (item.background_color) { backgroundImageStyle.backgroundColor = item.background_color; }
    if (item.text_color) { titleStyle.color = item.text_color; }
    if (item.background_logo) {
      backgroundImageStyle.backgroundImage = `url(/img/${item.background_logo})`;
      backgroundImageStyle.backgroundSize = item.background_logo_size ? item.background_logo_size : '50%';
    }
    if (item.background_picture) {
      let backgroundImagePrefix = '';
      let backgroundSizePrefix = '';
      if (item.background_logo) {
        backgroundImagePrefix = `${backgroundImageStyle.backgroundImage}, `;
        backgroundSizePrefix = `${backgroundImageStyle.backgroundSize}, `;
      }
      backgroundImageStyle.backgroundImage = `${backgroundImagePrefix}url(/img/${item.background_picture})`;
      const backgroundSizeSuffix = item.background_picture_size ? item.background_picture_size : 'cover';
      backgroundImageStyle.backgroundSize = `${backgroundSizePrefix}${backgroundSizeSuffix}`;
    }
    if (item.title && (item.background_logo || item.background_picture)) { backgroundImageStyle.opacity = '0.2'; }

    return (
      <div className={`UberTile${item.link ? ' withLink' : ''}`} style={tileStyle}>
        <a className="UberTile-link" {... item.link ? {href: item.link} : {}} target={settings.default_link_target}>
          <div className="UberTile-background-image" style={backgroundImageStyle} />
          {item.description && <div className="UberTile-description" style={descriptionStyle}><span>{item.description}</span></div>}
          <div className="UberTile-title" style={titleStyle}><span>{item.title}</span></div>
        </a>
      </div>
    );
  }
}

export default UberTile;
