import styles from "../Styles/input.module.css"
export default function Input({forinput,tage, ...rest}) {
  return (
    <div className={styles.input}>
        <label for={forinput}>{tage}</label>
        <input {...rest}/>
    </div>
  )
}
