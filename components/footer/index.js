"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { VscGithubAlt } from "react-icons/vsc";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/darkModeSlice";

export default function Footer() {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div className={styles.positionAbsolute}>
      <div className={styles.footer}>
        <Link
          href="https://github.com/ucemrecan"
          className={
            isClickedDarkMode ? styles.socialsDark : styles.socialsLight
          }>
          <VscGithubAlt />
        </Link>
        <Link
          href="https://twitter.com/itsucc1"
          className={
            isClickedDarkMode ? styles.socialsDark : styles.socialsLight
          }>
          <TfiTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ucemrecan/"
          className={
            isClickedDarkMode ? styles.socialsDark : styles.socialsLight
          }>
          <SlSocialLinkedin />
        </Link>
        <Link
          href="mailto:ucemrecan@gmail.com"
          className={
            isClickedDarkMode ? styles.socialsDark : styles.socialsLight
          }>
          <CiMail />
        </Link>
      </div>
    </div>
  );
}
