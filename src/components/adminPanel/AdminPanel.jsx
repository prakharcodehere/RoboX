import React from "react";
import styles from "./adminPanel.module.css";
import Header from "../Header/Header";
import data from "../../data.json";
import Card from "../Card/Card";
import teams from "../../team.json";
import TeamCard from "../TeamCard/TeamCard";
import Footer from "../Footer/Footer";

const AdminPanel = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#about" >About</a></li>
            <li className={styles.navItem}><a href="#product" >Products</a></li>
            <li className={styles.navItem}><a href="#team" >Team</a></li>
          </ul>
        </nav>
        <div className={styles.content}>
          <div className={styles.aboutSection} id="about">
            <h3 className={styles.aboutHeading}>OUR MISSION</h3>
            <span className={styles.aboutPara}>
              we are dedicated to harnessing the power of artificial
              intelligence to create innovative robotic solutions that enhance
              human life, simplify complex tasks, and contribute to a smarter
              and more connected world.
            </span>
          </div>

          <div className={styles.values}>
            <h3 className={styles.valuesHeading}>OUR VALUES</h3>
            <span className={styles.valuesPara}>
              <strong>Ethical AI:</strong>Ethical AI: We prioritize
              transparency, fairness, and accountability in the development and
              deployment of artificial intelligence.
              <br />
              <strong>Innovation:</strong> Constantly pushing the boundaries to
              bring cutting-edge solutions to market.
              <br />
              <strong>Collaboration:</strong> Fostering partnerships and
              collaboration to drive advancements in the AI and robotics
              industry.
              <br />
            </span>
          </div>

          <div className={styles.productWrapper} id="product">
            <h3 className={styles.productHeading}>PRODUCT AND SERVICES</h3>

            <div className={styles.cardWrapper}>
              {data.map((item) => {
                return (
                  <Card image={item.image} name={item.name} key={item.id} />
                );
              })}
            </div>
          </div>

          <div className={styles.teamWrapper} id="team">
            <h3 className={styles.teamHeading}>OUR TEAM</h3>

            <div className={styles.cardWrapper}>
              {teams.map((item) => {
                return (
                  <TeamCard
                    image={item.image}
                    description={item.description}
                    name={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminPanel;
