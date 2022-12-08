const initialState = {
  userData: {
    name: '',
    balance: 0,
    creditValue: 0,
    status: 0,
    vipLevel: 1,
    avatar: '',
  },
  dataSource: [
    {
      key: '1',
      sort: 1,
      planName: '剖析React内部运行机制推广',
      budget: 22,
      keyword: '广告营销, 电商平台推广',
      autoOpenValue: 1,
      city: '沈阳',
    },
    {
      key: '2',
      sort: 2,
      planName: '营销平台推广',
      budget: 32,
      keyword: '广告营销, 电商平台推广',
      autoOpenValue: 0,
      city: '广州',
    },
  ],
  productList: [
    {
      imgUrl: 'assets/productitemimgs/团队-17.png',
      description: '客户主动搜索关键词时，能立即看到您的产品及服务，主动寻求合作。搜索推广是基于中文搜索引擎百度搜索，在搜索结果显著的位置优先展示您的推广信息，只有客户点击广告之后，您才需要付费。',
      title: '搜索广告',
      subTitle: '客户主动搜索关键词，广告高效且信任感强',
      applicationStatus: false,
      vipRequired: 1,
    },
    {
      imgUrl: 'assets/productitemimgs/团队-2.png',
      description: '将您的推广信息自然融入在各类资讯、信息中，易传播，易操作。信息流推广是在百度APP、百度首页、贴吧、百度手机浏览器等平台的资讯流中穿插展现的原生广告，广告即是内容。',
      title: '信息流广告',
      subTitle: '根据客户主动搜索的关键词，定向展现营销内容',
      applicationStatus: false,
      vipRequired: 2,
    },
    {
      imgUrl: 'assets/productitemimgs/团队-5.png',
      description: '强势打造您企业的专业品牌形象，增强消费者信任，利于网络获客。百度品牌专区，位于百度搜索结果首位，以超大黄金首屏展示位置，以文字、图片、视频等多种广告形式全方位推广展示企业品牌信息，提升企业品牌推广效能。',
      title: '品牌广告',
      subTitle: '首屏黄金位置，助力企业打造品牌形象，使客户形成品牌认知',
      applicationStatus: false,
      vipRequired: 3,
    },
    {
      imgUrl: 'assets/productitemimgs/团队-9.png',
      description: '整合优质品牌广告流量，以开屏广告样式强势品牌曝光。搭建百度系开屏产品矩阵，整合百度优质广告资源与流量，以APP开屏广告的样式，强势品牌曝光。',
      title: '开屏广告',
      subTitle: '基于大数据赋能和意图营销的优质移动营销产品',
      applicationStatus: false,
      vipRequired: 4,
    },
    {
      imgUrl: 'assets/productitemimgs/团队-15.png',
      description: '程序化数字屏幕广告平台，全面覆盖用户日常生活场景，强化品牌形象。通过聚合多类屏幕，触达消费者多场景生活时刻，实现线上线下广告整合和精准程序化投放。',
      title: '聚屏广告',
      subTitle: '通过多维精准定向，您可以找到更有潜力的目标客户',
      applicationStatus: false,
      vipRequired: 5,
    },
  ],
};

const indexData = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
  case 'RECEIVE_USER_BALANCE':
    return {
      ...state,
      userData: action.userData,
    };
  case 'CHANGE_USER_AVATAR':
    newState.userData = { ...newState.userData, avatar: action.avatar };
    return newState;
  case 'ADD_DATA_SOURCE':
    newState.dataSource = [...newState.dataSource, action.row];
    return newState;
  case 'VIP_LEVEL_UP':
    newState.userData = { ...newState.userData, vipLevel: action.vipLevel + 1 };
    return newState;
  case 'CHANGE_BALANCE':
    newState.userData = {
      ...newState.userData,
      balance: state.userData.balance + action.addBalance,
    };
    return newState;
  default:
    return state;
  }
};

export default indexData;
