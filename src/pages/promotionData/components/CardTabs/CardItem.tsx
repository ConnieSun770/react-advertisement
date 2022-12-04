import React, { Component } from 'react';
import { CardItemType } from './types';

interface IProps {
  itemData:CardItemType;
  onClick?:(id:string) => void;
}
interface IStates { }

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
      name, id, contemporaryValue, currentValue, isSelected,
    } = itemData;
    const cardItemStyle = isSelected ? 'card-item-components-box card-item-selected' : 'card-item-components-box';
    return (
      <div className={cardItemStyle} onClick={() => { this.handleClick(id); }}>
        <div className="info">
          <div className="name-percent">
            <div className="name">{name}</div>
            <div className="percent">{currentValue}</div>
          </div>
          <div className="value">
            <div>
              <span>{`当期：${currentValue}`}</span>
              <span>{`同期：${contemporaryValue}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
