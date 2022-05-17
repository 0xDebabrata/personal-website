import Wrapper from "./Wrapper"

import styles from "../../styles/Social.module.css"
import twitter from "../../public/images/Twitter.png"
import instagram from "../../public/images/Instagram_1.png"
import youtube from "../../public/images/Youtube.png"

const socialLinks = {
  twitter: "https://twitter.com/0xDebabrata",
  instagram: "https://instagram.com/0xDebabrata",
  youtube: "https://www.youtube.com/channel/UCdl3h_Wa7u2Kf5-ZDqJ569w"
}

export default function Social() {

  return(
    <div className={styles.container}>
      <Wrapper
        imgSrc={twitter}
        imgAlt={"Twitter pixer art icon"}
        url={socialLinks.twitter}
      />
      <Wrapper
        imgSrc={instagram}
        imgAlt={"Instagram pixer art icon"}
        url={socialLinks.instagram}
      />
      <Wrapper
        imgSrc={youtube}
        imgAlt={"Youtube pixer art icon"}
        url={socialLinks.youtube}
      />
    </div>
  )
}
