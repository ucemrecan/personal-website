"use client";
import { useSelector } from "react-redux";
import { isDarkModeEnabled } from "@/redux/features/darkModeSlice";
import styles from "./styles.module.css";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import Profile from "@/public/profil.png";
import React from "react";

export default function About() {
  const isClickedDarkMode = useSelector(isDarkModeEnabled);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Hakkımda</h3>
        <p>
          Ben inşaat mühendisliği mezunu bir Jr. Frontend Developer’ım. İnşaat
          mühendisliğinde birkaç yıl çalıştıktan sonra yazılım sektörüne geçiş
          yapmaya karar verdim. Veri bilimi, makine öğrenmesi, full stack
          development gibi çeşitli yazılım alanlarında bootcamplere ve kurslara
          katılarak kendimi geliştirmeye çalıştım. Sonunda, front-end sektörüne
          odaklanma kararı aldım. Genellikle projelerimi React kullanarak
          geliştiriyorum ve şu anda aktif olarak Next.js öğrenmeye devam
          ediyorum.
        </p>
        <Link
          className={styles.link}
          href="https://drive.google.com/file/d/1qoYVVhzJRJy-N8eJiCweRdz_hjVgbr02/view?usp=sharing">
          <BsArrowDown />
          <p>özgeçmiş</p>
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
