import axios from 'axios';
import * as types from './ActionTypes';
import { CHANGE_BALANCE, CHANGE_USER_AVATAR } from './ActionTypes';

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

const setUserAvatar = (avatar: string) => ({
  type: types.CHANGE_USER_AVATAR,
  avatar,
});

export const changeUserAvatar = (avatar:string) => (dispatch:any) => {
  dispatch(setUserAvatar(avatar));
};

export const addToTable = (row:any) => ({
  type: types.ADD_DATA_SOURCE,
  row,
});

export const levelUp = (vipLevel:number) => ({
  type: types.VIP_LEVEL_UP,
  vipLevel,
});

export const changeBalance = (newBalance:number) => ({
  type: types.CHANGE_BALANCE,
  newBalance,
});
