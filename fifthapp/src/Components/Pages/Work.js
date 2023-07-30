import React from 'react'
import styles from "../../Styles/work.module.css"
import Button from "../Button"
import Workproducts from '../Workproducts'
import imone from "../../images/thone.jpg"
import imtwo from "../../images/thtwo.jpg"
import imtree from "../../images/Cubism-art.jpg"
export default function Work() {
  return (
    <div className={styles.work}>
        <div className={styles.innerwork}>
         <div  className={styles.left}>
              <h3>Recent Work</h3>
              <p className={styles.p} >
              Lorem ipsum is placeholder text commonly used in the graphic.
              </p>
              <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button className={styles.btn} classfors={`${styles.link}`}>
                viwe portfolio
              </Button>
         </div>
         <div className={styles.right}>
            <Workproducts imgsrc={imone} p="Lorem ipsum dolor sit amet consectetur adipiscing elit" h="catalogue"/>
            <Workproducts imgsrc={imtwo} p="Lorem ipsum dolor sit amet consectetur adipiscing elit" h="loupe"/>
            <Workproducts imgsrc={imtree} p="Lorem ipsum dolor sit amet consectetur adipiscing elit" h="retro rocket"/>
         </div>
        </div>
    </div>
  )
}
