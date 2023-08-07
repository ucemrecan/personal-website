import Contact from "@/components/contact";
import React from "react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Contacts");

  return (
    <Contact heading={t("heading")} mail={t("mail")} socials={t("socials")} />
  );
}
