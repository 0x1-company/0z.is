import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>0z.is</title>
        <meta name="description" content="Redirect to URL set in ENS text record" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: '#0070f3'}}>0z.is</span>
        </h1>
        <h3>0z.is/[telegram,twitter,github or url]/your ENS</h3>

        <div className={styles.description}>
          <a target='_blank' href='https://0z.is/vitalik.eth'>
            0z.is/vitalik.eth
          </a>
          <br />
          <a target='_blank' href='https://0z.is/twitter/ens.eth'>
            0z.is/twitter/ens.eth
          </a>
          <br />
          <a target='_blank' href='https://0z.is/github/ens.eth'>
            0z.is/github/ens.eth
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          &copy; Copyright ONE, Inc. 2022. All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}
