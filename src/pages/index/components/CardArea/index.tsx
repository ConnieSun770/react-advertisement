import React, { Component } from 'react';
import './style.scss';
import PromotionCard from './PromotionCard';

interface IProps {
  history:any;
  vipLevel:number;
}
interface IStates {
}

const PromotionData = [
  {
    name: '推广数据',
    cost: 1,
    budget: 100,
    btnStatus: 1,
    desc: '',
    type: 1,
    vipRequired: 1,
  },
  {
    name: '信息流推广',
    cost: 1,
    budget: 100,
    btnStatus: 0,
    desc: '信息流推广借助大数据、用户需求定向和智能投放等技术，通过APP、贴吧、视频等资讯流帮您触达高潜用户。',
    type: 2,
    vipRequired: 2,
  },
  {
    name: '智能推广',
    cost: 1,
    budget: 100,
    btnStatus: 0,
    desc: '智能推广通过精准识别用户搜索需求和意图，触发行业定制化的搜索特型结果。',
    type: 2,
    vipRequired: 4,
  },
  {
    name: '知识营销',
    cost: 1,
    budget: 100,
    btnStatus: 0,
    desc: '知识营销通过解答网民问题直达相关需求，深度影响消费决策，在长期内形成品牌与内容营销的协同效应 。',
    type: 2,
    vipRequired: 5,
  },
];

class Card extends Component<IProps, IStates> {
  state = {
  }

  handleEnter = () => {
    const { history } = this.props;
    history.push('/promotion');
  }

  render() {
    const { vipLevel } = this.props;
    return (
      <div className="card-area-box">
        {
          PromotionData.map((cardItem, index) => (
            <PromotionCard
              key={`product-item-${index.toString()}`}
              name={cardItem.name}
              cost={cardItem.cost}
              budget={cardItem.budget}
              btnStatus={Boolean(cardItem.btnStatus)}
              desc={cardItem.desc}
              type={cardItem.type}
              vipRequired={cardItem.vipRequired}
              vipLevel={vipLevel}
              onEnter={this.handleEnter}
            />
          ))
        }
      </div>
    );
  }
}

export default Card;
