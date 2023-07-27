import React from "react";
import styles from "./styles.module.css";
import Card from "@/components/card";
import projects from "@/service/projects.json";

export default function page() {
  return (
    <div className={styles.container}>
      <h3>Projelerim</h3>
      <div className={styles.cards}>
        {projects.images.map((project, index) => {
          return (
            <Card
              className={styles.card}
              key={index}
              src={project.src}
              alt={project.alt}
              title={project.title}
              hrefWebsite={project.hrefWebsite}
              hrefGithub={project.hrefGithub}
            />
          );
        })}
      </div>
    </div>
  );
}
