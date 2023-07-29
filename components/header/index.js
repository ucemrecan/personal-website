"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { CiDark, CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/features/darkModeSlice";

export default function Header() {
  const dispatch = useDispatch();

  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log(locale);

  function handleClickCloseMenu() {
    setIsClickedMenu(false);
  }

  function handleClickMenuItem() {
    setIsClickedMenu(false);
  }

  function handleMenu() {
    setIsClickedMenu(true);
  }

  return (
    <div className={styles.positionAbsolute}>
      <div className={styles.container}>
        <div className="logo">
          <Link href="/" className={styles.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-v-423bf9ae=""
              viewBox="0 0 154.71263620231562 60"
              className="font"
              height={48}
              width={48}>
              <g
                data-v-423bf9ae=""
                id="3d70ba59-a7e2-449a-93af-29b47029de65"
                fill="#01384A"
                transform="matrix(5.7471261427876925,0,0,5.7471261427876925,-1.954024592803279,-20.459769216308146)">
                <path d="M2.94 10.72L2.94 10.72Q2.94 11.83 3.64 12.47L3.64 12.47L3.64 12.47Q4.34 13.12 5.40 13.12L5.40 13.12L5.40 13.12Q6.47 13.12 7.17 12.47L7.17 12.47L7.17 12.47Q7.87 11.83 7.87 10.72L7.87 10.72L7.87 5.61L7.87 5.61Q7.87 4.97 7.69 4.72L7.69 4.72L7.69 4.72Q7.50 4.47 6.97 4.31L6.97 4.31L6.65 4.23L6.82 3.75L9.48 3.75L9.66 3.98L9.48 4.23L9.48 4.23Q9.13 4.69 8.99 5.21L8.99 5.21L8.99 5.21Q8.85 5.73 8.85 6.57L8.85 6.57L8.85 10.72L8.85 10.72Q8.85 12.38 7.84 13.19L7.84 13.19L7.84 13.19Q6.83 14 5.22 14L5.22 14L5.22 14Q3.58 14 2.57 13.19L2.57 13.19L2.57 13.19Q1.55 12.38 1.55 10.72L1.55 10.72L1.55 5.61L1.55 5.61Q1.55 4.97 1.37 4.72L1.37 4.72L1.37 4.72Q1.19 4.47 0.66 4.31L0.66 4.31L0.34 4.23L0.50 3.75L3.57 3.75L3.75 3.98L3.57 4.23L3.57 4.23Q3.22 4.69 3.08 5.21L3.08 5.21L3.08 5.21Q2.94 5.73 2.94 6.57L2.94 6.57L2.94 10.72ZM15.36 3.56L15.36 3.56Q16.27 3.56 16.99 3.81L16.99 3.81L16.99 3.81Q17.71 4.07 18.11 4.54L18.11 4.54L18.11 4.54Q18.51 5.01 18.51 5.61L18.51 5.61L18.51 5.61Q18.51 6.33 18.08 6.79L18.08 6.79L18.08 6.79Q17.65 7.25 17.01 7.25L17.01 7.25L17.01 7.25Q16.72 7.25 16.72 7.08L16.72 7.08L16.72 7.08Q16.72 7.04 16.84 6.85L16.84 6.85L16.84 6.85Q16.95 6.65 17.05 6.41L17.05 6.41L17.05 6.41Q17.14 6.16 17.14 5.81L17.14 5.81L17.14 5.81Q17.14 5.15 16.65 4.75L16.65 4.75L16.65 4.75Q16.16 4.34 15.36 4.34L15.36 4.34L15.36 4.34Q14.32 4.34 13.66 4.98L13.66 4.98L13.66 4.98Q13.01 5.63 12.71 6.64L12.71 6.64L12.71 6.64Q12.42 7.64 12.42 8.79L12.42 8.79L12.42 8.79Q12.42 9.97 12.79 10.93L12.79 10.93L12.79 10.93Q13.16 11.90 13.85 12.47L13.85 12.47L13.85 12.47Q14.53 13.03 15.44 13.03L15.44 13.03L15.44 13.03Q16.34 13.03 17.00 12.71L17.00 12.71L17.00 12.71Q17.65 12.38 18.07 11.77L18.07 11.77L18.07 11.77Q18.12 11.72 18.17 11.72L18.17 11.72L18.17 11.72Q18.30 11.72 18.46 11.85L18.46 11.85L18.46 11.85Q18.62 11.98 18.62 12.11L18.62 12.11L18.62 12.11Q18.62 12.15 18.58 12.22L18.58 12.22L18.58 12.22Q17.37 14 15.32 14L15.32 14L15.32 14Q13.86 14 12.85 13.31L12.85 13.31L12.85 13.31Q11.84 12.63 11.34 11.45L11.34 11.45L11.34 11.45Q10.84 10.26 10.84 8.79L10.84 8.79L10.84 8.79Q10.84 7.31 11.34 6.13L11.34 6.13L11.34 6.13Q11.84 4.94 12.86 4.25L12.86 4.25L12.86 4.25Q13.87 3.56 15.36 3.56L15.36 3.56ZM24.00 3.56L24.00 3.56Q24.91 3.56 25.63 3.81L25.63 3.81L25.63 3.81Q26.35 4.07 26.75 4.54L26.75 4.54L26.75 4.54Q27.15 5.01 27.15 5.61L27.15 5.61L27.15 5.61Q27.15 6.33 26.72 6.79L26.72 6.79L26.72 6.79Q26.29 7.25 25.65 7.25L25.65 7.25L25.65 7.25Q25.35 7.25 25.35 7.08L25.35 7.08L25.35 7.08Q25.35 7.04 25.47 6.85L25.47 6.85L25.47 6.85Q25.59 6.65 25.68 6.41L25.68 6.41L25.68 6.41Q25.77 6.16 25.77 5.81L25.77 5.81L25.77 5.81Q25.77 5.15 25.28 4.75L25.28 4.75L25.28 4.75Q24.79 4.34 24.00 4.34L24.00 4.34L24.00 4.34Q22.96 4.34 22.30 4.98L22.30 4.98L22.30 4.98Q21.64 5.63 21.35 6.64L21.35 6.64L21.35 6.64Q21.06 7.64 21.06 8.79L21.06 8.79L21.06 8.79Q21.06 9.97 21.43 10.93L21.43 10.93L21.43 10.93Q21.80 11.90 22.48 12.47L22.48 12.47L22.48 12.47Q23.17 13.03 24.08 13.03L24.08 13.03L24.08 13.03Q24.98 13.03 25.63 12.71L25.63 12.71L25.63 12.71Q26.29 12.38 26.71 11.77L26.71 11.77L26.71 11.77Q26.75 11.72 26.81 11.72L26.81 11.72L26.81 11.72Q26.94 11.72 27.10 11.85L27.10 11.85L27.10 11.85Q27.26 11.98 27.26 12.11L27.26 12.11L27.26 12.11Q27.26 12.15 27.22 12.22L27.22 12.22L27.22 12.22Q26.01 14 23.95 14L23.95 14L23.95 14Q22.50 14 21.49 13.31L21.49 13.31L21.49 13.31Q20.48 12.63 19.98 11.45L19.98 11.45L19.98 11.45Q19.47 10.26 19.47 8.79L19.47 8.79L19.47 8.79Q19.47 7.31 19.98 6.13L19.98 6.13L19.98 6.13Q20.48 4.94 21.50 4.25L21.50 4.25L21.50 4.25Q22.51 3.56 24.00 3.56L24.00 3.56Z" />
              </g>
            </svg>
          </Link>
        </div>
        <div className={styles.rightNav}>
          <button>
            <Link href="/" locale={locale}>
              EN
            </Link>
          </button>
          <button>
            <CiDark onClick={() => dispatch(toggleDarkMode())} />
          </button>
          <button>
            <CiMenuFries onClick={handleMenu} />
          </button>

          {isClickedMenu ? (
            <div className={styles.menuContainer}>
              <div className={styles.closeIcon}>
                <button onClick={handleClickCloseMenu}>
                  <AiOutlineClose />
                </button>
              </div>
              <div className={styles.menuItems}>
                <Link href="/" onClick={handleClickMenuItem}>
                  <p>
                    <span>01</span>Anasayfa
                  </p>
                </Link>

                <Link href="/about" onClick={handleClickMenuItem}>
                  <p>
                    <span>02</span>Hakkımda
                  </p>
                </Link>

                <Link href="/projects" onClick={handleClickMenuItem}>
                  <p>
                    <span>03</span>Projelerim
                  </p>
                </Link>

                <Link href="/contact" onClick={handleClickMenuItem}>
                  <p>
                    <span>04</span>Iletisim
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
