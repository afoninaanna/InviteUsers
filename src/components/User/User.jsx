import React from 'react'
import s from './style.module.css'

function User() {
  return (
    <div className={s.user}>
        <img className={s.avatar}/>
        <div className={''}>
           <span>First Name Last Name</span>
           <p>pochta</p>
        </div>
        <img className={s.plusMinus}/>
    </div>
  )
}

export default User