import { useState } from 'react';
import User from '../User/User'
import s from './style.module.css'

function Users({ items, onClickInvate, invitations, onClickSentInvitations }) {
  const [searchQuery, setSearchQuery] = useState('');
  function inputOnChange(event) {
    setSearchQuery(event.target.value);
  }
  const filteredUsers = items.filter((item) => {
      const fullName = (item.first_name + item.last_name).toLowerCase();
      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        item.email.includes(searchQuery.toLowerCase())
      );
  })
  return (
    <div className={s.listUsers}>
      <h2>Пригласить пользователей</h2>
      <input
        value={searchQuery}
        onChange={inputOnChange}
        type='text'
        className={s.input}
        placeholder='поиск' />
      {filteredUsers.map((user) =>
        <User
          isInvated={invitations.includes(user.id)}
          onClickInvate={onClickInvate}
          key={user.id}
          {...user} //first_name, last_name, id, email, avatar
        />
      )}
      {(invitations.length > 0) &&
        <button onClick={onClickSentInvitations} className={s.btn}>Отправить приглашение</button>
      }
    </div>
  )
}

export default Users