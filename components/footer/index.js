import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { VscGithubAlt } from "react-icons/vsc";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <div className={styles.positionAbsolute}>
      <div className={styles.footer}>
        <Link href="https://github.com/ucemrecan" className={styles.socials}>
          <VscGithubAlt />
        </Link>
        <Link href="https://twitter.com/itsucc1" className={styles.socials}>
          <TfiTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ucemrecan/"
          className={styles.socials}>
          <SlSocialLinkedin />
        </Link>
        <Link href="mailto:ucemrecan@gmail.com" className={styles.socials}>
          <CiMail />
        </Link>
      </div>
    </div>
  );
}
