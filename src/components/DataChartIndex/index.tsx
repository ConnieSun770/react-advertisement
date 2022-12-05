import React, { Component } from 'react';
import './style.scss';
import { DatePicker, Select } from 'antd';
// import { observer, inject } from 'mobx-react';
import { cloneDeep } from 'lodash';
import CardTabs from '../CardTabs';
import LineChart from '../LineChart';
import { CardItemType } from '../CardTabs/types';
// import promotionStore from 'pages/promotionData/promotionData.store';

const defaultCardData = [
  {
    id: '1',
    name: '消费（元）',
    value: 2000,
    percent: '',
    icon: 'assets/imgs/card-icon1',
    isSelected: true,
  },
  {
    id: '2',
    name: '展现（次）',
    value: 5988,
    percent: 88.9,
    icon: 'assets/imgs/card-icon2',
    isSelected: false,
  },
  {
    id: '3',
    name: '点击（次）',
    value: 199,
    percent: 12.6,
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
];

interface CardDataItem{
  id:string;
  name:string;
  value:number;
  percent:number|string;
  icon:string;
  isSelected:boolean;
}

interface IProps{
  cardData?: CardDataItem[];
  store?: any;
}
interface IStates{
}

// @inject('store')
// @observer
class Chart extends Component<IProps, IStates> {
  state = {
    cardData: this.props.cardData || defaultCardData,
    chartData: [
      {
        year: '2011',
        value: 3,
      },
      {
        year: '2012',
        value: 4,
      },
      {
        year: '2013',
        value: 3,
      },
      {
        year: '2014',
        value: 5,
      },
      {
        year: '2015',
        value: 7,
      },
      {
        year: '2016',
        value: 6,
      },
      {
        year: '2017',
        value: 7,
      },
      {
        year: '2018',
        value: 9,
      },
      {
        year: '2019',
        value: 13,
      },
    ],
  }

  // componentDidMount() {
  //   const { store } = this.props;
  //   store.getChartData();
  // }

  handleCardTabChange = (selectedId:string) => {
    const { cardData, chartData } = this.state;
    const newCardData = cardData.map((cardItem:CardItemType, index) => {
      const tempCardItem = cloneDeep(cardItem);
      tempCardItem.isSelected = selectedId === cardItem.id;
      return tempCardItem;
    });
    const newChartData = chartData.map((chartItem) => {
      const tempChartItem = cloneDeep(chartItem);
      tempChartItem.value += Math.floor(Math.random() * 10) - 2;
      return tempChartItem;
    });
    this.setState({
      cardData: newCardData,
      chartData: newChartData,
    });
  }

  render() {
    const {
      cardData,
      chartData,
    } = this.state;
    return (
      <div className="data-chart-component">
        <div className="card-tabs-box">
          <CardTabs
            cardData={cardData}
            onChange={(selectedId:string) => { this.handleCardTabChange(selectedId); }}
          />
        </div>
        <div className="line-chart-box">
          <LineChart chartData={chartData} />
        </div>
      </div>
    );
  }
}

export default Chart;
