import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../';
function UserList() {
  const { randomScore } = useSelector((state) => state);
  const userData = randomScore.data;
  let xpos = 0;
  let time = 0;
  const moveRight = (timestamp) => {
    
    let diff = timestamp - time;
    console.log(diff);
    time = timestamp;
    
    let user = document.getElementById('user');
    xpos = xpos + 5;
    user.style.transform = `translateX(${xpos}px)`;
    const width = document.body.clientWidth;
    const space = (width - 384) / 2;
    if (xpos < space) {
      requestAnimationFrame(moveRight);
    }
  };
  window.requestAnimationFrame(moveRight);
  return (
    <div className='flex items-center justify-center flex-col h-auto w-full'>
      <h1 className='uppercase mt-20 mb-10 underline text-4xl text-gray-700'>
        Chart
      </h1>
      <div className='w-2/6' id='user'>
        {userData.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
