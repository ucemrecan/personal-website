import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ alt, src, title, hrefWebsite, hrefGithub }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}></Image>
      </div>
      <div className={styles.overlay}>
        <h6 className={styles.title}>{title}</h6>
        <Link href={hrefWebsite} prefetch={false}>
          <button className={styles.button}>Visit website</button>
        </Link>
        <Link href={hrefGithub} prefetch={false}>
          <button className={styles.button}>Click for github</button>
        </Link>
      </div>
    </div>
  );
}
