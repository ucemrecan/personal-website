import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Main() {
  return (
    <div className={styles.container}>
      <h1>Merhaba, ben Umut Cemre</h1>
      <p>
        Jr. Frontend Developer&rsquo;ım, React(NextJS) ile projeler
        geliştirmekteyim.
      </p>
      <div className={styles.links}>
        <Link className={styles.link} href="/about">
          <HiArrowNarrowRight />
          <p>hakkımda</p>
        </Link>
        <Link className={styles.link} href="/projects">
          <HiArrowNarrowRight />
          <p>projelerim</p>
        </Link>
      </div>
    </div>
  );
}
