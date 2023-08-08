"use client";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";
import styles from "./styles.module.css";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import Profile from "@/public/profil.png";
import React from "react";

export default function AboutPage({ heading, content, cv }) {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3
          className={
            isClickedDarkMode ? styles.darkModeHeading : styles.lightModeHeading
          }>
          {heading}
        </h3>
        <p style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
          {content}
        </p>
        <Link
          className={
            isClickedDarkMode ? styles.darkModeLink : styles.lightModeLink
          }
          style={{ color: isClickedDarkMode ? "#F7E7D4" : "#022e3d" }}
          href="https://drive.google.com/file/d/1qoYVVhzJRJy-N8eJiCweRdz_hjVgbr02/view?usp=sharing">
          <BsArrowDown />
          <p>{cv}</p>
        </Link>
      </div>

      <div className={styles.profile}>
        <Image
          src={Profile}
          alt="profile"
          priority={true}
          placeholder="blur"
          fill
        />
      </div>
    </div>
  );
}
