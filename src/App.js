import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from './actions/randomAction';
import { UserList } from './components';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-center h-screen bg-gray-400'>
      <UserList />
    </div>
  );
}

export default App;
