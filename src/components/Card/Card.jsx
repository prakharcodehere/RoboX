import React from 'react'
import styles from "./Card.module.css"


const Card = ({image, name}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name}/>
      </div>
      <h5 className={styles.heading}>{name}</h5>
    </div>
  )
}

export default Card
