import axios from 'axios';
import { useEffect, useState } from 'react';
import User from '../User/User'
import s from './style.module.css'

function Users({ items, searchQuery }) {
  return (
    <div className={s.listUsers}>
    {items.filter((item)=>{
      const fullName = (item.first_name + item.last_name).toLowerCase();
      return fullName.includes(searchQuery.toLowerCase()) || item.email.includes(searchQuery.toLowerCase());
    }).map((user) => 
      <User 
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        id={user.id}
        email={user.email}
        avatar={user.avatar}
      />
    )}

    </div>
  )
}

export default Users