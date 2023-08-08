import React from "react";
import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

function CardLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={240} width={400} />
          ))}
      </div>
    </div>
  );
}

export { CardLoading };
