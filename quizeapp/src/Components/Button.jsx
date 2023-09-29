import styles from "../Styles/Button.module.css"
export default function Button({children,...rest}) {
  return (
    <>
    
    <button className={styles.btn} {...rest}>{children}</button>
    
    </>
  )
}
