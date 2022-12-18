import React from "react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

import { NotificationContextProvider } from "../contexts/notifications-context";
import { ModalContextProvider } from "../contexts/modal-context";

import PagesLayoutApp from "../components/layout/PagesLayoutApp";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ModalContextProvider>
        <NotificationContextProvider>
          <PagesLayoutApp>
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
          </PagesLayoutApp>
        </NotificationContextProvider>
      </ModalContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
