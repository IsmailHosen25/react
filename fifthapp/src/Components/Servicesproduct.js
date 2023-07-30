import React from 'react'
import styles from '../Styles/Servicesproduct.module.css'
export default function Servicesproduct({icon,h2,p1,p2,popular}) {
  return (
    <div  className={styles.product}>
         <div className={styles.icon}>{icon}</div>
         <h2>{h2}</h2>
         <p className={styles.p}>{p1}</p>
         <p className={styles.p2}>{popular? <div className={styles.popular}>Popular</div>:null} {p2}</p>
    </div>
  )
}
