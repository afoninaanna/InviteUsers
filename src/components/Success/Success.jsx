import React from 'react'
import s from './style.module.css';
import success from '../../assets/success.svg';

function Success({count}) {
  return (
    <div className={s.success}>
      <img src={success}/>
        <h2>Успешно</h2>
        <p>Сообщение отправлено {count} пользователям</p>
        <button onClick={()=> window.location.reload()} className={s.btn}>Назад</button>
    </div>
  )
}

export default Success