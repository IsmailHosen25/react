import React from 'react'
import styles from "../Styles/Socialicon.module.css"
export default function Socialicon({children}) {
  return (
    <div className={styles.socilicon}>
           {children}
    </div>
  )
}
