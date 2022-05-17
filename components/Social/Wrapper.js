import Image from "next/image"
import { motion } from "framer-motion"

import styles from "../../styles/Social.module.css"

export default function Wrapper({ imgSrc, imgAlt, url }) {
  return(
    <a href={url} target="_blank">
      <motion.div 
        whileHover={{
          y: -8
        }}
        className={styles.imgWrapper}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={50}
          height={50}
        />
      </motion.div>
    </a>
  )
}
