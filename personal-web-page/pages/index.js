import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.name}>
          <img src="profile.jpg" alt="profile picture" className={styles.avatar} />
          <section>
            <h1 className={styles.title}>
              Diego Rodríguez
            </h1>
            <p className={styles.description}>
              Full Stack JavaScript Developer
            </p>
          </section>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          <img src="/next.svg" alt="Next.js Logo" className={styles.logo} />
          <img src="/react.svg" alt="React.js Logo" className={styles.logo} />
          <img src="/sass.svg" alt="Sass Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
