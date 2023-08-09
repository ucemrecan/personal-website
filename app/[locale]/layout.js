"use client";
import Header from "@/components/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import ReduxProvider from "@/components/redux-provider";
import Background from "@/components/background-image";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
<link rel="preload" href="style.css" as="style" />;
const montserrat = Montserrat({ subsets: ["latin"] });

export default function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = import(`../../messages/${locale}.json`).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>Umut Cemre Can</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Umut Cemre Can - Front End Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Background>
              <Header />
              <main>{children}</main>
              <Footer />
            </Background>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
