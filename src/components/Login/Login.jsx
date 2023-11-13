import React , {Fragment, useState} from 'react'
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'
import WorldDotted from "../../assets/worldDotted.png"

const Login = ({handleLoginSubmit}) => { 

  const [loginData, setLoginData] = useState(
    {
      username: "",
      password: "",
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit(loginData);
  };






  
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
</div>
    <div className={styles.mainContainer}>
    <div>
      <img src={WorldDotted} className={styles.worldImg} alt="world-image"/>
    </div>
    <div className={styles.container}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}> 
        <label className={styles.label}>Username</label>
        <input className={styles.input} placeholder='enter username'
         type="text"
         name="username"
         value={loginData.username}
         onChange={handleChange}
        />

        <label className={styles.label}>Password</label>
        <input className={styles.input} placeholder='enter password'
         type="password"
         name="password"
         value={loginData.password}
         onChange={handleChange}
        />

       <button type='submit' className={styles.btn}>Login</button>
      </form>


<span className={styles.text}> Didn't have an account <br/>
<Link className={styles.registerLink} to="/register">
              Register now{" "}
            </Link>
</span>
  </div>
  </div>
  </div>
  )
}

export default Login
