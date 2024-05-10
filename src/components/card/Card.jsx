import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="Single-blog" className={styles.image  } fill/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, non. Enim, atque, animi iusto a dolores neque dicta laboriosam inventore laudantium cupiditate earum, culpa eius voluptatum voluptas non maiores explicabo?...
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>

    </div>
  );
};

export default Card;