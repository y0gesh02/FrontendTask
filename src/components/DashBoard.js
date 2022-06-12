
import React from 'react'
import {useState, useEffect} from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../redux/users/userActions'

import Home from './Home';
import Card from './Card';
import Loader from './Loader';

function UserDetail() {
  
  const [currentUser,setCurrentUser]=useState(null);
  const [isLoader, setIsLoader]=useState(false);

  const usersFromStore = useSelector(state=>state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchUsers());    
  },[]);
  
  const handleSingleUserRequest = async (index) => {
    setIsLoader(true);
    const response = await axios.get(`https://reqres.in/api/users/${index}`);
    setIsLoader(false);
    setCurrentUser(response.data.data);
  }
  
  return (
    <div>
      {isLoader
      ?<Loader />
      :(!currentUser?<Home />: <Card
     data={currentUser}/>)
      }
      <h2 className=' ml-2 '>Users List</h2>
      {
        usersFromStore.map((user,id)=>{
          return <span key={id}>
            <button className='btn buttona m-2' type='button' onClick={()=>handleSingleUserRequest(id+1)} >{id+1}</button>
          </span>
        })
      }
    </div>
  )
}

export default UserDetail;