import React from 'react'
import axios from 'axios';
import { useDispatch,useSelector  } from 'react-redux';
import { setUserData } from '../userSlice'; // Import your action creator
import  initialState  from '../store'; // Import your RootState type

export default function Index() {
  const url = 'http://localhost:3000/api/users';
  const dispatch = useDispatch();
  const userData = useSelector<typeof initialState>(state => state);

  const handleSaveData = () => {
    const newUserData = {
      uname: 'u1',
      upass: 'p1',
    };
    dispatch(setUserData(newUserData));
  };
  function auth(){
    const data = {
      uname: 'u1',
      upass: 'p1'
    };
    axios.post(url, data)
    .then(response => {
      handleSaveData()
      console.log(response.data); // Handle successful response
    })
    .catch(error => {
      console.error(error); // Handle error
    });
  }
  
  return (
    <>
     <div>
      {userData ? (
        <p>User Data: {JSON.stringify(userData)}</p>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
    <div>index</div>
    <button type='submit' onClick={()=> auth()}>Login Data</button>
    </>
    
  )
}
