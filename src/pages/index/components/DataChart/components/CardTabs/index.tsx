import React, { Component } from 'react';
import './style.scss';
import { CardItemType } from './types';
import CardItem from './CardItem';

interface IProps {
  cardData:CardItemType[];
  onChange?:(selectedId:string) => void;
}
interface IStates{}

class CardTabs extends Component<IProps, IStates> {
  state = {}

  handleChange = (selectedId:string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(selectedId);
    }
  }

  render() {
    const { cardData } = this.props;
    return (
      <div className="data-tabs-component-box">
        {
          cardData.map((cardItem, index) => (
            <CardItem
              key={`tabs-item${index.toString()}`}
              itemData={cardItem}
              onClick={(selectedId:string) => { this.handleChange(selectedId); }}
            />
          ))
        }
      </div>
    );
  }
}

export default CardTabs;
