import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/darkModeSlice";

export default function Background({ children }) {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div className={isClickedDarkMode ? styles.bgDark : styles.bgLight}>
      {children}
    </div>
  );
}
