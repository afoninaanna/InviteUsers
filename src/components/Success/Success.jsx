import React from 'react'

function Success({count}) {
  return (
    <div>
        <img src='/assets/success.svg'/>
        <h2>Успешно</h2>
        <p>Сообщение отправлено {count} пользователям</p>
        <button onClick={()=> window.location.reload()}>Назад</button>
    </div>
  )
}

export default Success