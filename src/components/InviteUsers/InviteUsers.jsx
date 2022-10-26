import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Success from '../Success/Success';
import Users from '../Users/Users';
import s from './style.module.css';

function InviteUsers() {
  const [users, setUsers] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((data) => {
        setUsers(data.data.data) ;
      });
  }, []);
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
      { success
        ? <Success count={invitations.length}/>
        : <Users 
            items={users} 
            invitations={invitations} 
            onClickInvate={onClickInvate}
            onClickSentInvitations={onClickSentInvitations}
          />
      }
    </div>
  )
}

export default InviteUsers