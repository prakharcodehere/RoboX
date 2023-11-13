import React from 'react'
import styles from "./Footer.module.css"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import LinkedIn from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
        
          <div className={styles.mainWrapper}>
    <nav>
      <div className={styles.logo}>
      <div className={styles.logoText}>
          <span className={styles.roboX}>roboX </span> ×  <span className={styles.seimensLogo}>SIEMENS</span>
      </div>
      </div>
    </nav>
</div>

<div className={styles.veticalLine}></div>
<div className={styles.contactInfo}>
<h4>emailme@robox.org</h4>
<h5> 22 bakers street,Bengaluru</h5>
<span>© 2023 RoboX.All rights reserved</span>
</div>


<div className={styles.logoWrapper}>
    <img src={Facebook} alt="facebook"/>
    <img src={Twitter} alt="twitter"/>
    <img src={LinkedIn} alt="linkedIn"/>
  
</div>
    </div>
  )
}

export default Footer
