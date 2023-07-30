import Span from "./Span"
import styles from "../Styles/Text.module.css"
export default function Text(){
    return <div className={styles.text}>
       <p>I think most <Span className={styles.span1}> programs</Span> spend the first 5 years of theie career mastering <Span className={styles.span2}>complesity</Span> and the rest of their lives learning <Span className={styles.span3}>simplicity</Span><br/>Buzz Andersen</p>
       </div>
}