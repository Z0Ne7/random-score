import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../';
import animateNumber from '../../utils/animateNumber';
import * as action from '../../actions/randomAction';
function UserList() {
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomScore();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const { randomScore } = useSelector((state) => state);
  const userDatas = randomScore.data;
  const dispatch = useDispatch();
  const generateRandomScore = () => {
    const newUserDatas = [...userDatas];
    for (let userData of newUserDatas) {
      const previousScore = 0;
      const currentScore = previousScore + Math.floor(Math.random() * 100);
      const duration = 2000;
      animateNumber(previousScore, previousScore + Math.floor(Math.random() * 100), 2000, (number) => {
        // newUserDatas.score = number;
        console.log(userData.name)
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
        {userDatas.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
