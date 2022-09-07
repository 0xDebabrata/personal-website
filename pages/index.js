import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"

import Social from "../components/Social/Social"

import styles from '../styles/Home.module.css'
import citrusPng from "../public/images/Citrus.png"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Debabrata Mondal</title>
        <meta name="description" content="Debabrata Mondal's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div 
          animate={{
            y: [0, 20, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className={styles.imageWrapper}
        >
          <Image
            alt="Lemon slice pixel art"
            src={citrusPng}
            width={150} 
            height={150}
          />
        </motion.div>
        <h1 className={styles.title}>
          Debabrata Mondal
        </h1>

        <Social />

        <div className={styles.wrapper}>
          <a href='https://github.com/0xDebabrata' target='__blank' rel='noopener'>
            <button
              className={styles.projects}>
              Projects
            </button>
          </a>
          <a href='mailto:debabratajr@gmail.com'>
            <button
              className={styles.projects}>
              Contact
            </button>
          </a>
        </div>
      </main>
    </div>
  )
}
