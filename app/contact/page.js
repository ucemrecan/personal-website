import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function page() {
  return (
    <div className={styles.container}>
      <h1>Iletisim</h1>
      <div className={styles.containerItems}>
        <div className={styles.mail}>
          <h3>mail</h3>
          <Link href="mailto:ucemrecan@gmail.com">
            <FiArrowUpRight className={styles.icons} />
            ucemrecan@gmail.com
          </Link>
        </div>
        <div className={styles.socials}>
          <h3>sosyal medya</h3>
          <div className={styles.socialItems}>
            <Link href="https://github.com/ucemrecan">
              <FiArrowUpRight className={styles.icons} />
              github
            </Link>
            <Link href="https://twitter.com/itsucc1">
              <FiArrowUpRight className={styles.icons} />
              twitter
            </Link>
            <Link href="https://www.linkedin.com/in/ucemrecan/">
              <FiArrowUpRight className={styles.icons} />
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
