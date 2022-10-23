import React from 'react'
import s from './style.module.css'

function User({ firstName, lastName, id, email, avatar, isInvated, onClickInvate}) {
  return (
    <div className={s.user}>
        <img src={avatar}/>
        <div className={s.content}>
           <p>{firstName} {lastName}</p>
           <span>{email}</span>
        </div>
      <img 
        onClick={() => onClickInvate(id)}
        src={`/assets/${isInvated ? 'minus' : 'plus'}.svg`}
        className={s.plusMinus}/>
    </div>
  )
}
export default User