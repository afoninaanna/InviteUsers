import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Success from '../Success/Success';
import Users from '../Users/Users';
import s from './style.module.css';

function InviteUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [success, setSuccess] = useState(false);
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
  function onClickSentInvitations(){
    setSuccess(true);
  }
  return (
    <div className={s.app}>
         <div className={s.wrapperUsers}>
          {success
          ? <Success count={invitations.length}/>
          : 
          <>
            <h2>Пригласить пользователей</h2>
            <input 
              value={searchQuery}
              onChange={inputOnChange}
              type='text' 
              className={s.input} 
              placeholder='поиск'/>
            <Users 
              items={users} 
              searchQuery={searchQuery}
              invitations={invitations} 
              onClickInvate={onClickInvate}
              />
              {(invitations.length > 0) &&
                <button onClick={onClickSentInvitations}>Отправить приглашение</button>
              }
          </>
          }
        </div>
    </div>
  )
}

export default InviteUsers