import React, { useEffect, useRef } from 'react';
import animateNumber from '../../utils/animateNumber';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/randomAction';

function User({ userDatas }) {
  const dispatch = useDispatch();
  let refs = useRef(
    Array.from({ length: userDatas.length }).map(() => React.createRef())
  );
  // console.log(refs);
  useEffect(() => {
    const interval = setInterval(() => {
      animateUser();
      // dispatch(action.sortScore());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function animateUser() {
    const userDatasCopy = [...userDatas];
    const sortUser = userDatasCopy.sort((a, b) => b.score - a.score);
    const duration = 1000;
    for (let i in sortUser) {
      console.log(refs.current[i].current.offsetTop);
      if (refs.current[i].current !== null) {
        const resName =
          refs.current[i].current.children[0].children[0].innerText;
        switch (resName) {
          case sortUser[0].name: {
            const offsetTopUser = refs.current[i].current;
            let currentOffsetTop = refs.current[0].current.offsetTop;
            animateNumber(
              0,
              currentOffsetTop - offsetTopUser.offsetTop,
              duration,
              (distance) => {
                offsetTopUser.style = `transform: translateY(${distance}px)`;
              }
            );
            currentOffsetTop = currentOffsetTop - offsetTopUser.offsetTop;
            break;
          }
          case sortUser[1].name: {
            const offsetTopUser = refs.current[i].current;
            let currentOffsetTop = refs.current[1].current.offsetTop;
            animateNumber(
              0,
              currentOffsetTop - offsetTopUser.offsetTop,
              duration,
              (distance) => {
                offsetTopUser.style = `transform: translateY(${distance}px)`;
              }
            );
            currentOffsetTop = currentOffsetTop - offsetTopUser.offsetTop;
            break;
          }
          case sortUser[2].name: {
            const offsetTopUser = refs.current[i].current;
            let currentOffsetTop = refs.current[2].current.offsetTop;
            animateNumber(
              0,
              currentOffsetTop - offsetTopUser.offsetTop,
              duration,
              (distance) => {
                offsetTopUser.style = `transform: translateY(${distance}px)`;
              }
            );
            currentOffsetTop = currentOffsetTop - offsetTopUser.offsetTop;
            break;
          }

          case sortUser[3].name: {
            const offsetTopUser = refs.current[i].current;
            let currentOffsetTop = refs.current[3].current.offsetTop;
            animateNumber(
              0,
              currentOffsetTop - offsetTopUser.offsetTop,
              duration,
              (distance) => {
                offsetTopUser.style = `transform: translateY(${distance}px)`;
              }
            );
            currentOffsetTop = currentOffsetTop - offsetTopUser.offsetTop;
            break;
          }

          case sortUser[4].name: {
            const offsetTopUser = refs.current[i].current;
            let currentOffsetTop = refs.current[4].current.offsetTop;
            animateNumber(
              0,
              currentOffsetTop - offsetTopUser.offsetTop,
              duration,
              (distance) => {
                offsetTopUser.style = `transform: translateY(${distance}px)`;
              }
            );
            currentOffsetTop = currentOffsetTop - offsetTopUser.offsetTop;
            break;
          }
          default:
            return;
        }
      }
    }
  }

  return userDatas.map((userData, index) => (
    <div
      ref={refs.current[index]}
      key={userData.id}
      className='flex w-128 border border-red-100 align-center mt-5 p-3 justify-between bg-gray-100 items-center shadow-3xl rounded-md hover:bg-green-500 hover:text-white cursor-pointer'
    >
      <div className='w-2/6'>
        <h1 className='pb-2'>{userData.name}</h1>
        <p>{userData.email}</p>
      </div>
      <div>
        Score : <b>{userData.score}</b>
      </div>
      <div className='mr-2'>
        <img
          className='w-20 rounded-3xl'
          src={userData.avatar}
          alt={userData.name}
        />
      </div>
    </div>
  ));
}

export default User;
