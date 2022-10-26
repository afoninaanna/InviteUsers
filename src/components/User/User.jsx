import React from 'react'
import s from './style.module.css'
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';

function User({ first_name, last_name, id, email, avatar, isInvated, onClickInvate}) {
  return (
    <div className={s.user}>
        <img src={avatar} className={s.avatar}/>
        <div className={s.content}>
           <p className={s.fullName}>{first_name} {last_name}</p>
           <span className={s.email}>{email}</span>
        </div>
        <img 
          onClick={() => onClickInvate(id)}
          src={isInvated ? minus : plus}
          className={s.plusMinus}
        />
    </div>
  )
}
export default User