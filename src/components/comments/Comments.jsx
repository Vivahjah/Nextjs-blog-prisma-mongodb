import React from 'react'
import styles from "./comments.module.css"
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {

  const status =  "authenticated"  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "Unauthenticated" ? (
        <div className={styles.write}>
          <textarea placeholder='write a comment...' className={styles.input}></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login  to write a comment </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user-image" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Esse molestias ratione reiciendis animi expedita, nam velit qui ipsam, alias quod explicabo,
           itaque suscipit? Maxime reiciendis a voluptate sed, deleniti facere.
        </p>
      
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user-image" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Esse molestias ratione reiciendis animi expedita, nam velit qui ipsam, alias quod explicabo,
           itaque suscipit? Maxime reiciendis a voluptate sed, deleniti facere.
        </p>
      
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user-image" width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Esse molestias ratione reiciendis animi expedita, nam velit qui ipsam, alias quod explicabo,
           itaque suscipit? Maxime reiciendis a voluptate sed, deleniti facere.
        </p>
      
        </div>
      </div>
      
    </div>
  )
}

export default Comments