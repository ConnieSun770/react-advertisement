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
  default:
    return state;
  }
};

export default indexData;
