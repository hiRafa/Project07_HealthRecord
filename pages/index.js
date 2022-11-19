import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Account from "../components/account/Account";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Welcome to your Medical Records platform at Health Memory</h1>
        <div>
          <h2>Looking for health care around you?</h2>
          <button>Check out our list</button>
        </div>
      </section>
      <Account />

      <footer className={styles.footer}></footer>
    </Fragment>
  );
}
