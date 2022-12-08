import React, { Component } from 'react';
import {
  Button, Image, Modal, Radio,
} from 'antd';
import AVATAR_LIST from 'common/constants/avatar';
import { connect } from 'react-redux';
import { changeUserAvatar } from 'store/index/actions';
import { userDataType } from '../../types';
import './styles.scss';

interface IProps extends userDataType{
  changeAvatar:(avatar1:string)=>void;
}

interface IStates{
  avatarModalShow:boolean;
  budgetOption:string;
}

class UserInfo extends Component<IProps, IStates> {
  state={
    avatarModalShow: false,
    budgetOption: '冰川',
  }

  handleBudgetOk = () => {
    const { budgetOption } = this.state;
    const { changeAvatar } = this.props;
    changeAvatar(budgetOption);
    this.setState({
      avatarModalShow: false,
    });
  }

  handleBudgetCancel = () => {
    this.setState({
      avatarModalShow: false,
    });
  }

  handleAvatarChange = () => {
    this.setState({
      avatarModalShow: true,
    });
  }

  handleRadioChange = (newValue: string) => {
    this.setState({
      budgetOption: newValue,
    });
  }

  render() {
    const {
      name, status, vipLevel, creditValue, balance, avatar,
    } = this.props;
    const {
      avatarModalShow, budgetOption,
    } = this.state;
    const radioStyle = {
      display: 'block',
      width: '150px',
      height: '45px',
      lineHeight: '45px',
      marginBottom: '45px',
    };
    return (
      <div className="user-info-components-box">
        <div className="left-content">
          <div className="user-avatar">
            {/* <div className="icon iconfont icon-shutiao" /> */}
            <Image
              width={280}
              height={280}
              src={avatar ? `assets/avatarimg/${avatar}.png` : 'assets/avatarimg/山水.png'}
            />
          </div>
          <div className="button">
            <Button
              type="primary"
              size="large"
              onClick={this.handleAvatarChange}
            >
              更换头像
            </Button>
          </div>
        </div>
        <div className="center-content">
          <div className="username">
            <div>{`账户名 - ${name}`}</div>
            <div className={`icon iconfont icon-vip${vipLevel}`} />
          </div>
          <div className="row">
            <div className="label-text">账户状态:</div>
            <div className="value-text examine">
              {
                status === 0 ? (
                  <span className="status">账户余额不可用</span>
                ) : (
                  <span className="status-ok">账户余额可用</span>
                )
              }
            </div>
          </div>
          <div className="row">
            <div className="label-text">账户余额:</div>
            <div className="value-text">{balance}</div>
          </div>
          <div className="row">
            <div className="label-text">账户信用:</div>
            <div className="value-text">{creditValue}</div>
          </div>
          <div className="row">
            <div className="label-text">会员到期时间:</div>
            <div className="value-text">2023-10-20</div>
          </div>
          <div className="row">
            <div className="label-text">当前推广套餐：</div>
            <div className="value-text">智能推广</div>
          </div>
        </div>
        <div className="right-content">
          <div className="title">智能推广</div>
          <div>智能推广通过精准识别用户搜索需求和意图，触发行业定制化的搜索特型结果。</div>
          <br />
          产品优势：
          <ul>
            <li> 按效果付费：无点击不收费，免费获得大量展现。</li>
            <li> 多位置展现：推广后会展现在列表页和详情页的右侧以及底部位置。</li>
            <li> 可控制预算：系统智能推广；也可自定义投放多城市，多类别，随时出价，预算可控。</li>
            <li> 防恶意点击：多重过滤机制，实时监控，安全可靠。</li>
          </ul>
        </div>
        <Modal
          title={`${name}预算设置`}
          open={avatarModalShow}
          onOk={this.handleBudgetOk}
          onCancel={this.handleBudgetCancel}
          okText="确定"
          cancelText="取消"
          className="budget-modal"
          width={1000}
        >
          <Radio.Group
            onChange={(e) => { this.handleRadioChange(e.target.value); }}
            value={budgetOption}
            defaultValue={avatar}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {
              AVATAR_LIST.map((avatarItem, index) => (
                <Radio
                  value={avatarItem.title}
                  style={radioStyle}
                  key={`avatar-radio-${avatarItem.id}`}
                >
                  <img style={{ display: 'inline-block' }} src={avatarItem.imgUrl} width={100} height={100} alt="" />
                </Radio>
              ))
            }
          </Radio.Group>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    changeAvatar: (avatar1:string) => dispatch(changeUserAvatar(avatar1)),
  };
}

export default connect(null, mapDispatchToProps)(UserInfo);
