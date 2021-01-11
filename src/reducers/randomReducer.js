import { ACTION } from '../constants/actionTypes';
import * as ICON from '../constants/iconTypes';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Ruth J Winn',
      email: 'kaitlyn1974@hotmail.com',
      score: 0,
      avatar: ICON.USER_AVATAR_1,
      position: 1,
    },
    {
      id: 2,
      name: 'Ted D Hurst',
      email: 'bianka.gaylo@hotmail.com',
      score: 0,
      avatar: ICON.USER_AVATAR_2,
      position: 2,
    },
    {
      id: 3,
      name: 'Charles A Andrews',
      email: 'vernice.smi@hotmail.com',
      score: 0,
      avatar: ICON.USER_AVATAR_3,
      position: 3,
    },
    {
      id: 4,
      name: 'Robert M Phillips',
      email: 'veda_schowalt@hotmail.com',
      score: 0,
      avatar: ICON.USER_AVATAR_4,
      position: 4,
    },
    {
      id: 5,
      name: 'Adriane J Trujillo',
      email: 'elias19902011@gmail.com',
      score: 0,
      avatar: ICON.USER_AVATAR_5,
      position: 5,
    },
  ],
};

const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_SCORE:
      return { data: action.payload };
    case ACTION.SORT_SCORE:
      state.data.sort((a, b) => b.score - a.score);
      return state;
    default:
      return state;
  }
};

export default randomReducer;
