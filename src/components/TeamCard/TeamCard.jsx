import React from 'react'
import styles from "./TeamCard.module.css"

const TeamCard = ({name, image, description}) => {
  return (
    <div className={styles.card}>
    <div className={styles.imgWrapper}>
      <img src={image} alt={name}/>
    </div>
    <div className={styles.textWrapper}>
    <h5 className={styles.teamHeading}>{name}</h5>
    <span>{description}</span>
  </div>
  </div>
  )
}

export default TeamCard
