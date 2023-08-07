"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";

export default function Main() {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div
      className={styles.container}
      style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
      <h1>Merhaba, ben Umut Cemre</h1>
      <p>
        Jr. Frontend Developer&rsquo;ım, React(NextJS) ile projeler
        geliştirmekteyim.
      </p>
      <div className={styles.links}>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          href="/about">
          <HiArrowNarrowRight />
          <p>hakkımda</p>
        </Link>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          href="/projects">
          <HiArrowNarrowRight />
          <p>projelerim</p>
        </Link>
      </div>
    </div>
  );
}
