import React, { useState } from 'react'
import Users from '../Users/Users';
import s from './style.module.css';

function InviteUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className={s.app}>
      <div className={s.wrapperUsers}>
        <h2>Пригласить пользователей</h2>
        <input 
          value={searchQuery}
          onChange={(event)=> setSearchQuery(event.target.value)}
          type='text' 
          className={s.input} 
          placeholder='поиск'/>
        <Users/>
      </div>
    </div>
  )
}

export default InviteUsers