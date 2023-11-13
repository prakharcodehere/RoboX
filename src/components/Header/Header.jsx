import React from 'react'
import styles from "./Header.module.css"
import UserImg from "../../assets/user.png"
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  
  let name = localStorage.getItem("username")
  console.log("user-name", name)
const handleLogout = () => {
localStorage.clear();
navigate("/")



}


  return (
    <div>
         <div className={styles.mainWrapper}>
    <nav>
      <div className={styles.logo}>
      <div className={styles.logoText}>
          <span className={styles.roboX}>roboX </span> ×  <span className={styles.seimensLogo}>SIEMENS</span>
      </div>
      </div>
      </nav>
      <div className={styles.userAction}>
        <div className={styles.userProfile}>
        <img src={UserImg} className={styles.userImg} alt={localStorage.getItem("username")}/>
       <span>{localStorage.getItem("username")}</span>

        </div>
      

    <button className={styles.logout} onClick={handleLogout}>Logout</button>
      </div>
   
</div>
    </div>
  )
}

export default Header
