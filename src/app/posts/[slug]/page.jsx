import React from 'react'
import Menu from '@/components/menu/Menu'
import styles from "./singlePage.module.css"
const SinglePage   = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage  