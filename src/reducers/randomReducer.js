import produce from 'immer';
import { ACTION } from '../constants/actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Ruth J Winn',
      email: 'kaitlyn1974@hotmail.com',
      score: 0,
      avatar:
        'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/man-icon.png',
    },
    {
      id: 2,
      name: 'Ted D Hurst',
      email: 'bianka.gaylo@hotmail.com',
      score: 0,
      avatar:
        'https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png',
    },
    {
      id: 3,
      name: 'Charles A Andrews',
      email: 'vernice.smi@hotmail.com',
      score: 0,
      avatar:
        'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/customer-service-icon.png',
    },
    {
      id: 4,
      name: 'Robert M Phillips',
      email: 'veda_schowalt@hotmail.com',
      score: 0,
      avatar:
        'https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/User-Coat-Green-icon.png',
    },
    {
      id: 5,
      name: 'Adriane J Trujillo',
      email: 'elias19902011@gmail.com',
      score: 0,
      avatar:
        'https://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Female-Light-icon.png',
    },
  ],
};

const randomReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION.UPDATE_SCORE:
        draft.data = action.payload;
        break;
      default:
        return state;
    }
  });

export default randomReducer;
