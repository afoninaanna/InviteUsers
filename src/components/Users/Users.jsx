import User from '../User/User'
import s from './style.module.css'

function Users() {
  return (
    <div className={s.listUsers}>
        <User/>
    </div>
  )
}

export default Users