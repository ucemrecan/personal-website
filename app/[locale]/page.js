import Main from "@/components/main";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Main");

  return (
    <div>
      <Main
        heading={t("heading")}
        title={t("title")}
        about={t("about")}
        project={t("project")}
      />
    </div>
  );
}
