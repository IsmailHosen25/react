import styles from "../../Styles/Home.module.css"
import robot from "../../images/Robot.png"
import rocket from "../../images/rocket-ship.png"
import Button from "../Button"
import Image from "../Image"
import Text from "../Text"
import Services from "./Services"
import Work from "./Work"
import About from "./About"
export default function Home() {
  return (
    <>
    <div className={styles.home}>

      <div className={styles.homecontaint}>
 
        <Image sr={`${robot}`} className={`${styles.img1}`}/>

         <div className={styles.para}>

           <h1>FLATI REACT JS</h1>
           <h2>CREAT - DESIGN - CODE</h2>

           <Button link="https://www.youtube.com/watch?v=xuhlsOVVfks" target="_blank" classfors={styles.link} className={`${styles.btn}`}>
            MY BUTTON
           </Button>

         </div>
         
        <Image sr={`${rocket}`} className={`${styles.img2}`}/>
      </div>
    </div>
    <Text />
    <Services/>
    <Work/>
    <About/>
    </>
  )
}
