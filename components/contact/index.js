"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";

export default function Contact() {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div
      className={styles.container}
      style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
      <h1
        className={
          isClickedDarkMode ? styles.darkModeHeading : styles.lightModeHeading
        }>
        Iletisim
      </h1>
      <div className={styles.containerItems}>
        <div className={styles.mail}>
          <h3>mail</h3>
          <Link
            href="mailto:ucemrecan@gmail.com"
            className={
              isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
            }>
            <FiArrowUpRight className={styles.icons} />
            ucemrecan@gmail.com
          </Link>
        </div>
        <div className={styles.socials}>
          <h3>sosyal medya</h3>
          <div className={styles.socialItems}>
            <Link
              href="https://github.com/ucemrecan"
              className={
                isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
              }>
              <FiArrowUpRight className={styles.icons} />
              github
            </Link>
            <Link
              href="https://twitter.com/itsucc1"
              className={
                isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
              }>
              <FiArrowUpRight className={styles.icons} />
              twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/ucemrecan/"
              className={
                isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
              }>
              <FiArrowUpRight className={styles.icons} />
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
