import AboutPage from "@/components/about";
import React from "react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("About");

  return (
    <AboutPage heading={t("heading")} content={t("content")} cv={t("cv")} />
  );
}
