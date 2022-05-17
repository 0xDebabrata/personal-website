import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debabrata Mondal</title>
        <meta name="description" content="Debabrata Mondal's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Citrus.png"
            width={150} 
            height={150}
          />
        </div>
        <h1 className={styles.title}>
          Debabrata Mondal
        </h1>

      </main>
    </div>
  )
}
