import { ACTION } from '../constants/actionTypes';

export const randomScore = () => {
  return {
    type: ACTION.RANDOM_SCORE,
  };
};
