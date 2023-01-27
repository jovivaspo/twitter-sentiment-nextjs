import React from "react";
import { BsTwitter } from "react-icons/bs";
import styles from "@/styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.headerApp}>
      <div className={styles.titleContainerApp}>
        <h1 className={styles.titleApp}>Sentiment Analysis</h1>
        <BsTwitter className={styles.titleIcon} />
      </div>
    </header>
  );
};

export default Header;
