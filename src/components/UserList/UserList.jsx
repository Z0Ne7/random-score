import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../';
import animateNumber from '../../utils/animateNumber';
import * as action from '../../actions/randomAction';
const UserList = () => {
  const { randomScore } = useSelector((state) => state);
  const userDatas = randomScore.data;
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomScore();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRandomScore = () => {
    const newUserDatas = [...userDatas];
    for (let userData of newUserDatas) {
      const previousScore = userData.score;
      const currentScore = previousScore + Math.floor(Math.random() * 100);
      const duration = 3000;
      animateNumber(previousScore, currentScore, duration, (number) => {
        userData.score = number;
        dispatch(action.updateScore(newUserDatas));
      });
    }
  };
  return (
    <div className='flex items-center justify-center flex-col h-auto w-full'>
      <h1 className='uppercase mt-20 mb-10 underline text-4xl text-gray-700'>
        Chart
      </h1>
      <div className='w-2/6' id='user'>
        <User userDatas={userDatas} />
      </div>
    </div>
  );
};

export default UserList;
