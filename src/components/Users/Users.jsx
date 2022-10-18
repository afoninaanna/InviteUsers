import axios from 'axios';
import { useEffect, useState } from 'react';
import User from '../User/User'
import s from './style.module.css'

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((data) => {
        setUsers(data.data.data);
      });
  }, [])
  return (
    <div className={s.listUsers}>
    {users.map((user) => 
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