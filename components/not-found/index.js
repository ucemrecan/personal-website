"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";
import { useSelector } from "react-redux";

export default function NotFoundComponent({ heading, title, linkTitle }) {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div
      className={styles.container}
      style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
      <h2>{heading}</h2>
      <p>{title}</p>
      <div className={styles.linkDiv}>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          href="/">
          <HiArrowNarrowRight style={{ marginRight: "10px" }} />
          {linkTitle}
        </Link>
      </div>
    </div>
  );
}
