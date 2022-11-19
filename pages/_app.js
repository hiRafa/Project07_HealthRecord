import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

import { NotificationContextProvider } from "../contexts/notifications-context";

import PagesLayout from "../components/layout/PagesLayout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <PagesLayout>
          <Head>
            <title>Ori Craft & Hobbies</title>
            <meta />

            <meta name="description" content="" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />
        </PagesLayout>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
