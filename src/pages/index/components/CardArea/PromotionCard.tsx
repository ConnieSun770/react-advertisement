import React, { Component } from 'react';
import {
  Button, Modal, Radio, InputNumber,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ThemeContext, ThemeType } from 'context/theme';

interface IProps {
  name:string;
  desc:string;
  type:number;
  btnStatus:boolean;
  cost:number;
  budget?:number;
  vipLevel:number;
  vipRequired?:number;
  onEnter?:() => void;
}
interface IStates {
  editModalShow:boolean;
  budgetOption:number;
  budgetValue:number;
  dailyBudget:number;
}

class PromotionCard extends Component<IProps, IStates> {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: IProps) {
    super(props);
    this.state = {
      dailyBudget: props.budget || 0,
      editModalShow: false,
      budgetOption: 1,
      budgetValue: 0,
    };
  }

  // state = {
  //   editModalShow: false,
  //   budgetOption: 1,
  //   budgetValue: 0,
  // }

  openEditBudgetModal = () => {
    this.setState({
      editModalShow: true,
    });
  }

  handleBudgetOk = () => {
    const { budgetValue } = this.state;
    this.setState({
      editModalShow: false,
      dailyBudget: budgetValue,
    });
  }

  handleBudgetCancel = () => {
    this.setState({
      editModalShow: false,
    });
  }

  handleBudgetChange = (newValue: number|null) => {
    if (newValue === null) return;
    this.setState({
      budgetValue: newValue,
    });
  }

  handleClick = () => {
    const { onEnter } = this.props;
    if (onEnter) {
      onEnter();
    }
  }

  handleRadioChange = (newValue: number) => {
    this.setState({
      budgetOption: newValue,
    });
  }

  render() {
    const {
      name, desc, type, btnStatus, vipLevel, vipRequired = 0, cost = 0, budget = 0,
    } = this.props;
    const {
      editModalShow,
      budgetOption,
      budgetValue,
      dailyBudget,
    } = this.state;
    const radioStyle = {
      display: 'block',
      height: '35px',
      lineHeight: '35px',
    };
    return (
      <div className="promotion-card-component-box">
        <div className="name">{name}</div>
        {
          type === 1 ? (
            <div>
              <div className="wrap">
                <div className="label">??????(???)</div>
                <div className="value">{cost}</div>
              </div>
              <div className="wrap">
                <div className="label">?????????(???)</div>
                <div className="value">
                  {dailyBudget}
                  <EditOutlined
                    onClick={this.openEditBudgetModal}
                    style={{ marginLeft: 5 }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="desc">{desc}</div>
          )
        }
        {
          // eslint-disable-next-line no-nested-ternary
          type === 1 ? (
            <div className="btn-wrap">
              <Button
                // type={this.context.buttonType}
                type="primary"
                size="small"
                onClick={this.handleClick}
              >
                ??????
              </Button>
            </div>
          ) : vipLevel >= vipRequired ? (
            <div className="btn-wrap">
              <Button
                // type={this.context.buttonType}
                type="primary"
                size="small"
                onClick={this.handleClick}
              >
                ??????
              </Button>
            </div>
          ) : (
            <div className="btn-wrap">
              <Button type="primary" size="small" disabled title={`??????VIP${vipRequired}???`}>????????????</Button>
            </div>
          )
        }
        <Modal
          title={`${name}????????????`}
          open={editModalShow}
          onOk={this.handleBudgetOk}
          onCancel={this.handleBudgetCancel}
          okButtonProps={{ disabled: budgetValue < 50 }}
          okText="??????"
          cancelText="??????"
          className="budget-modal"
          width={700}
        >
          <Radio.Group
            onChange={(e) => { this.handleRadioChange(e.target.value); }}
            value={budgetOption}
          >
            <Radio value={1} style={radioStyle}>???????????????</Radio>
            <Radio value={2} style={radioStyle}>
              <span>??????</span>
              <span className="radio-hint">?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>
            </Radio>
          </Radio.Group>
          {
            budgetOption === 2 && (
              <div className="input-number">
                <InputNumber size="small" min={1} max={100000} defaultValue={budgetValue} onChange={(newValue) => { this.handleBudgetChange(newValue); }} />
                <span className="unit">???</span>
                <span className="hint">???????????????????????????????????????????????????50???</span>
              </div>
            )
          }
          <div className="budget-hint">?????????????????????????????????30?????????????????????????????????????????????????????????</div>
        </Modal>
      </div>
    );
  }
}
PromotionCard.contextType = ThemeContext;

export default PromotionCard;
