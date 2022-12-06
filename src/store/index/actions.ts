import axios from 'axios';
import * as types from './ActionTypes';

// export function receiveUserBalance(userBalance: any) {
//   return {
//     type: types.RECEIVE_USER_BALANCE,
//     userBalance,
//   };
// }

const receiveUserBalance = (userData: any) => ({
  type: types.RECEIVE_USER_BALANCE,
  userData,
});

export const getUserBalance = () => (dispatch:any) => {
  axios.get('ad/user/balance').then((res) => {
    dispatch(receiveUserBalance(res.data.data));
  });
};
