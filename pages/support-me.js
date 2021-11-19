import React from "react";
import Navbar from "../components/Navbar";
import NavButtons from "../components/NavButtons";
import styles from "../styles/SupportMe.module.css";
import Link from "next/link";
import SEO from "../components/SEO";

function SupportMe() {
  return (
    <div>
      <SEO title="Support Me" />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>Support me</h1>
          <p className={styles.description}>
            Sign in with one of available providers. If you have not used the
            platforms listed below, you may need to create an account.
          </p>
          <Link href="https://www.buymeacoffee.com/4startups">
            <div className={styles.firstOption}>
              <div className={styles.badge}>Recommended</div>
              <img
                src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                alt=""
              ></img>
              <p>Buy Me a Coffee</p>
            </div>
          </Link>

          <div className={styles.option}>
            <img src="/patreon.png" alt=""></img>
            <p>Patreon</p>
          </div>
          <div className={styles.option}>
            <img src="/ko-fo.png" alt=""></img>
            <p>Ko-fi</p>
          </div>
          <div className={styles.option}>
            <img src="/coindrop.png" alt=""></img>
            <p>Coinbase</p>
          </div>
          <div className={styles.option}>
            <img src="/tipeee.png" alt=""></img>
            <p>Tipeee</p>
          </div>
          <p className={styles.muted}>
            Every penny helps to offset the cost of developing, hosting and
            maintaining the site.
          </p>
        </div>
      </div>
      <NavButtons />
    </div>
  );
}

export default SupportMe;
