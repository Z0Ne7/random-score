import React from 'react';

function User(props) {
  const { name, email, score, avatar } = props;
  return (
    <div className='flex w-128 border border-red-100 align-center mt-5 p-3 justify-between bg-white items-center shadow-3xl rounded-md hover:bg-gray-400 hover:text-white cursor-pointer'>
      <div className='w-2/6'>
        <h1 className='pb-2'>{name}</h1>
        <p>{email}</p>
      </div>
      <div>
        Score : <b>{score}</b>
      </div>
      <div className='mr-2'>
        <img
          className='w-20 rounded-3xl'
          src={avatar}
          alt='user 1'
        />
      </div>
    </div>
  );
}

export default User;
