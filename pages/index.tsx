import Head from 'next/head'
import AboutSection from '../components/sections/about'
import CTASection from '../components/sections/cta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>0z.is</title>
        <meta name="description" content="Redirect to URL set in ENS text record" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0zURL" />
        <meta name="twitter:creator" content="@0zURL" />
        <meta name="twitter:image" content="https://0z.is/ogp.png" />
        <meta property="og:title" content="0z.is" />
        <meta property="og:description" content="Redirect to URL set in ENS text record" />
        <meta property="og:image" content="https://0z.is/ogp.png" />
      </Head>

      <main className={styles.main}>
        <AboutSection />
        <CTASection />
      </main>

      <footer className={styles.footer}>
        <span>
          &copy; Copyright ONE, Inc. 2022. All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}
