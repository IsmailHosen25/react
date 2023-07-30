import styles from "../../Styles/Services.module.css"
import Servicesproduct from "../Servicesproduct"
export default function Services() {
  return (
    <div className={styles.service}>
     <div className={styles.innerservice}>
        <Servicesproduct icon={<i class="fa-solid fa-pen-nib"></i>} h2={"design"} p1={'built for and by nords'} p2={"a plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made"}/>
        <Servicesproduct icon={<i class="fa-solid fa-code"></i>} h2={"code"} p1={'12-column grid'} p2={"Build fast, responsive sites with Bootstrap Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass. "}/>
        <Servicesproduct icon={<i class="fa-solid fa-flask"></i>} h2={"create"} p1={'responsive'} p2={"An experiment is a procedure carried out to support or refute a hypothesis, or determine the efficacy or likelihood of something previously untried. "}/>
        <Servicesproduct icon={<i class="fa-solid fa-book"></i>} popular={true} h2={"support"} p1={'growing library'} p2={"Experiments typically include controls, which are designed to minimize the effects of variables other than the single independent variable."}/>
     </div>
    </div>
  )
}
