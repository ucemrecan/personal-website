import Main from "@/components/main";
import { useTranslations } from "next-intl";

export default function Home({ params, searchParams }) {
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
