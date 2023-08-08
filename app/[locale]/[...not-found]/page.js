import NotFoundComponent from "@/components/not-found";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return <NotFoundComponent heading={t("heading")} title={t("title")} linkTitle={t("linkTitle")}/>;
}
