import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deeprare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.deeprare.com">Deeprare!</a>
        </h1>
        <h1 className={styles.title}>
          Would you like to own an NFT?
        </h1>
        <p className={styles.description}>
          more contents coming soon...
        </p>

        <div className={styles.grid}>
          <a href="https://www.deeprare.com" className={styles.card}>
            <h3>Home &rarr;</h3>
            <p>Basic Info</p>
          </a>

          <a href="https://www.deeprare.com" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Vision and Team</p>
          </a>

          <a
            href="https://www.deeprare.com"
            className={styles.card}
          >
            <h3>Sample Cases &rarr;</h3>
            <p>Discover our sample NFT cases. (One Heritage Tower)</p>
          </a>

          <a
            href="https://www.deeprare.com"
            className={styles.card}
          >
            <h3>Contact Us &rarr;</h3>
            <p>
              Contact us for collaborations
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.deeprare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Powered by{' '} Deeprare @ 2021
          </p>
        </a>
      </footer>
    </div>
  )
}
