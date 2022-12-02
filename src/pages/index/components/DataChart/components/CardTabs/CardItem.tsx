import React, { Component } from 'react';
import { CardItemType } from 'pages/index/components/DataChart/components/CardTabs/types';

interface IProps {
  itemData:CardItemType;
  onClick?:(id:string) => void;
}

interface IStates {

}

class CardItem extends Component<IProps, IStates> {
  state = {}

  handleClick = (id:string) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const { itemData } = this.props;
    const {
      name, id, percent, icon, value, isSelected,
    } = itemData;
    const cardItemStyle = isSelected ? 'carditem-component-box carditem-selected' : 'carditem-component-box';
    const iconPath = isSelected ? `${icon}-selected.png` : `${icon}.png`;
    const nameTextStyle = isSelected ? 'name-active' : 'name';
    const percentTextStyle = isSelected ? 'percent-active' : 'percent';
    const valueTextStyle = isSelected ? 'value-active' : 'value';
    return (
      <div className={cardItemStyle} onClick={() => { this.handleClick(id); }}>
        <img className="icon" src={iconPath} alt="icon" />
        <div className="info">
          <div className="name-percent">
            <div className={nameTextStyle}>{name}</div>
            <div className={percentTextStyle}>
              {percent + (percent ? '%' : '')}
            </div>
          </div>
          <div className={valueTextStyle}>{value}</div>
        </div>
      </div>
    );
  }
}

export default CardItem;
