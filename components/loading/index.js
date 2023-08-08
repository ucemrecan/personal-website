import React from "react";
import styles from "./styles.module.css";

function LoadingCircle() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}

export { LoadingCircle };
