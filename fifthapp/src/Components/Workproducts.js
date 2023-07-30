import React from 'react'
import styles from "../Styles/Workproduct.module.css"

export default function Workproducts({imgsrc,p,h}) {
  return (
    <div className={styles.workproduct}>
    <img src={imgsrc} className={styles.img} alt='not found'/>
     <div className={styles.para}>
        <h4 style={{textTransform:"uppercase"}}>
            {h}
        </h4>
        <p className={styles.p}>{p}</p>
     </div>

  </div>
  )
}
