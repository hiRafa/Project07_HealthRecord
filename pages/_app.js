import React from "react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

import { NotificationContextProvider } from "../contexts/notifications-context";
import { ModalContextProvider } from "../contexts/modal-context";

import PagesLayoutApp from "../components/layout/PagesLayoutApp";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ModalContextProvider>
          <NotificationContextProvider>
            <PagesLayoutApp>
              <Component {...pageProps} />
            </PagesLayoutApp>
          </NotificationContextProvider>
        </ModalContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
