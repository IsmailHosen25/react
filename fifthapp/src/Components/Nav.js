import styles from "../Styles/Nav.module.css"
import { Link } from "react-router-dom"
export default function Nav(){
return<>
 <div className={styles.nav}>
    <div className={styles.navinner}>
       <div className={styles.logo}>
            Hasan
       </div>
       <div className={styles.manu}>
         <div>
           <Link className={`${styles.link} ${styles.active}`} to="/">Home</Link>
         </div>
         <div>
           <Link className={styles.link} to="/services">Services</Link>
         </div>
         <div>
           <Link className={styles.link} to="/work">Work</Link>
         </div>
         <div>
           <Link className={styles.link} to="/about">About</Link>
         </div>
       </div>
    </div>
</div>
</>
}