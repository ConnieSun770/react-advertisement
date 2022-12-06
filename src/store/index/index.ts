const initialState = {
  userData: {},
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
  default:
    return state;
  }
};

export default indexData;
