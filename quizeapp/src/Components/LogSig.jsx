import { useNavigate } from "react-router-dom"
import styles from "../Styles/LogSig.module.css"
export default function LogSig() {
  const navigate=useNavigate()
  return (
    <>
    <div className={styles.left}>
    <h2 className={styles.llogo} onClick={()=>navigate("/")}>Quiz</h2>
    <div>
      <p className={styles.welcome}>Welcome to.....</p>
      <p className={styles.lp}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
    <p className={styles.lp}>Lorem ipsum is placeholder</p>
</div></>
  )
}
