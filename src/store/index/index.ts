const initialState = {
  userData: {},
};

const indexData = (state = initialState, action: any) => {
  switch (action.type) {
  case 'RECEIVE_USER_BALANCE':
    return {
      ...state,
      userData: action.userData,
    };
  case 'CHANGE_USER_AVATAR':
    // eslint-disable-next-line no-case-declarations
    const newState = { ...state };
    newState.userData = { ...newState.userData, avatar: action.avatar };
    return newState;
  default:
    return state;
  }
};

export default indexData;
