import React from 'react'
import s from './style.module.css'

function User({ firstName, lastName, id, email, avatar, isInvated, onClickInvate}) {
  return (
    <div className={s.user}>
        <img src={avatar} className={s.avatar}/>
        <div className={s.content}>
           <p className={s.fullName}>{firstName} {lastName}</p>
           <span className={s.email}>{email}</span>
        </div>
      <img 
        onClick={() => onClickInvate(id)}
        src={`/assets/${isInvated ? 'minus' : 'plus'}.svg`}
        className={s.plusMinus}/>
    </div>
  )
}
export default User