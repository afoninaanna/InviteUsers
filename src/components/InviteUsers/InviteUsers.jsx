import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Users from '../Users/Users';
import s from './style.module.css';

function InviteUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [invitations, setInvitations] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((data) => {
        setUsers(data.data.data);
      });
  }, []);
  function inputOnChange (event) {
    setSearchQuery(event.target.value);
  }
  function onClickInvate(id){
    if(invitations.includes(id)){
      setInvitations((prev) => 
        prev.filter((prevId) => prevId !== id)
      )
    } else {
      setInvitations([...invitations, id])
    }
  }
  return (
    <div className={s.app}>
      <div className={s.wrapperUsers}>
        <h2>Пригласить пользователей</h2>
        <input 
          value={searchQuery}
          onChange={inputOnChange}
          type='text' 
          className={s.input} 
          placeholder='поиск'/>
        <Users 
          invitations={invitations}
          items={users} 
          searchQuery={searchQuery} 
          onClickInvate={onClickInvate}/>
      </div>
    </div>
  )
}

export default InviteUsers