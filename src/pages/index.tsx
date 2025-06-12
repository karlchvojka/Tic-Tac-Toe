import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic-Tac-Toe Practice</title>
        <meta name="description" content="Basic tic-tac-toe practice app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <main className={styles.main}>
          <button className={styles.square}>X</button>
        </main>
      </div>
    </>
  );
}
