import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";


const Register = ({ handleSaveAfterSubmit }) => {


  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  // const handleData = () => {
  //   const newUser = {
  //     username: username,
  //     password,
  //     question,
  //     answer,
  //   };

  //   formData.push(newUser);

  //   onRegister(newUser);

  // };




  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    question: '',
    answer:'',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

   
    e.preventDefault();
 
    handleSaveAfterSubmit(formData);
  
  };






 


  return (
<>
    <div className={styles.mainWrapper}>
    <nav>
      <div className={styles.logo}>
      <div className={styles.logoText}>
          roboX  ×  <span className={styles.seimensLogo}>SIEMENS</span>
      </div>
      </div>
    </nav>
</div>
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            className={styles.input}
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
         

          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.input}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
         
          <label className={styles.label}>Confirm password</label>

          <input
            type="password"
            className={styles.input}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <label className={styles.label}>Security Question</label>

          <select
            className={styles.dropdown}
            name="question"
            value={formData.question}
            onChange={handleChange}
          >
            <option value="nickname">what is your nick name?</option>
            <option value="subject">what is your favourite subject?</option>
            <option value="dog">what is your dog name?</option>
            <option value="food">what is your favourite food?</option>
          </select>

          <input
            type="text"
            placeholder="Enter your answer"
            className={styles.input}
            value={formData.answer}
            name="answer"
            onChange={handleChange}
          />

        <button className={styles.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
