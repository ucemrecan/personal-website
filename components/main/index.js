"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";

export default function Main({ heading, title, about, project }) {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div
      className={styles.container}
      style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
      <h1>{heading}</h1>
      <p>{title}</p>
      <div className={styles.links}>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          href="/about">
          <HiArrowNarrowRight />
          <p>{about}</p>
        </Link>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          href="/projects">
          <HiArrowNarrowRight />
          <p>{project}</p>
        </Link>
      </div>
    </div>
  );
}
