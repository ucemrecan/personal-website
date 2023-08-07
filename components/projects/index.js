"use client";
import React from "react";
import Card from "@/components/card";
import styles from "./styles.module.css";
import projects from "@/service/projects.json";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/buttonSlice";

export default function Projects({ heading }) {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div className={styles.container}>
      <h3 style={{ color: isClickedDarkMode ? "#F7E7D4" : "#04526e" }}>
        {heading}
      </h3>
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
