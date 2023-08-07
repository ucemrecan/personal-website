import React from "react";
import Projects from "@/components/projects";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Projects");

  return <Projects heading={t("heading")} />;
}
