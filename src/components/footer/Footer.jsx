import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>Made by ADITYA NEGI</div>
       <div>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="random" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="random" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="random" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="random" />
       </div>
    </div>
  );
};

export default Footer;