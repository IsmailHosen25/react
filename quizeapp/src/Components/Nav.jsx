import { Link } from "react-router-dom"
import styles from "../Styles/Nav.module.css"
import { useAuth } from "../Hooks/useAuth"
export default function Nav() {
  const {login,setLogin}=useAuth()
 const logouthandle=()=>{
  setLogin(false)
 }
  return (
    <div className={styles.nav}>
      
      <div className={styles.navinner}>
      
        <Link to="/" className={styles.link}>Quiz</Link>
        <Link to="/qize" className={styles.link}>Start Quiz</Link>
        {login? <Link to="/" className={styles.link} onClick={logouthandle}>LogOut</Link>:<Link to="/login" className={styles.link}>Login</Link>}
        {login? "":<Link to="/sign" className={styles.link}>Sign Up</Link>}
      </div>


    </div>
  )
}
