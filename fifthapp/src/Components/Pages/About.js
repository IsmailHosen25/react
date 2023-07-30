import styles from "../../Styles/About.module.css"
import Socialicon from "../Socialicon"
export default function About() {
  return (
    <div className={styles.about}>
        <h1 className={styles.heading}>GET IN TOUCH</h1>
        <p className={styles.paragrap}>
          We are social and we'd love to hear from you! Feelfree to send us an email, find us on Google Plus. follows us on Twitter and join us on Facbook.
        </p>
        <div className={styles.socialmedia}>
        <Socialicon>
        <i class="fa-brands fa-twitter"></i>
        </Socialicon>
        <Socialicon>
        <i class="fa-brands fa-facebook-f"></i>
        </Socialicon>
        <Socialicon>
        <i class="fa-brands fa-linkedin-in"></i>
        </Socialicon>
        </div>
    </div>
  )
}
