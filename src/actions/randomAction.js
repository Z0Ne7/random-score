import { ACTION } from '../constants/actionTypes';

export const updateScore = (data) => {
  return {
    type: ACTION.UPDATE_SCORE,
    payload: data
  };
};
