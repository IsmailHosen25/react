import { Link} from "react-router-dom"
import styles from "../Styles/Loginsign.module.css"
import LogSig from "./LogSig"
export default function LoginSign({children,pgtitale,foruser,routeUser,forlink}) {
  return (
    <>
    <div className={styles.innerlogin}>
      <LogSig/>
    <div className={styles.right}>
      <div>
        <h2 className={styles.lh2}>{pgtitale}</h2>
        <p className={styles.lrp}>Welcome {pgtitale} to get amazing Quiz exam</p>
      </div>
      <div className={styles.linp}>
        {children}
      </div>
      <div className={styles.rdsign}>
      <p className={styles.lrp}>{foruser}</p><Link to={forlink} className={styles.llink}>{routeUser}</Link>
      </div>
    </div>
    
    </div>
    </>
  )
}
