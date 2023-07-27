import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ alt, src, title, hrefWebsite, hrefGithub }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={src} alt={alt} fill></Image>
      </div>
      <div className={styles.overlay}>
        <h6 className={styles.title}>{title}</h6>
        <Link href={hrefWebsite}>
          <button className={styles.button}>Visit website</button>
        </Link>
        <Link href={hrefGithub}>
          <button className={styles.button}>Click for github</button>
        </Link>
      </div>
    </div>
  );
}
