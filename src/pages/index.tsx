import Head from "next/head";
import styles from "@/styles/Home.module.css";

/* Component Imports */
import Board from '@/components/Board/board';
/* End Component Imports */

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic-Tac-Toe Practice</title>
        <meta name="description" content="Basic tic-tac-toe practice app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`} >
        <main className={styles.main}>
          <Board />
        </main>
      </div>
    </>
  );
}
