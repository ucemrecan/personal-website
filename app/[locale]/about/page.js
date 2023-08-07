import React from "react";
import About from "@/components/about";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("About");

  return <About heading={t("heading")} content={t("content")} cv={t("cv")} />;
}
