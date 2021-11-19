import React from "react";
import Navbar from "../components/Navbar";
import NavButtons from "../components/NavButtons";
import styles from "../styles/SupportMe.module.css";
import Link from "next/link";
import SEO from "../components/SEO";

const buyMeACoffeLink = "https://www.buymeacoffee.com/4startups";
const kofiLink = "https://ko-fi.com/4startups";
const coindropLink = "https://coindrop.to/for_startups";
const paypalLink = "https://www.paypal.com/biz/fund?id=U8JLPGC9GBRTG";

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
          <Link href={buyMeACoffeLink}>
            <div className={styles.firstOption}>
              <div className={styles.badge}>Recommended</div>
              <img
                src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                alt=""
              ></img>
              <p>Buy Me a Coffee</p>
            </div>
          </Link>
          <Link href={kofiLink}>
            <div className={styles.option}>
              <img src="/ko-fo.png" alt=""></img>
              <p>Ko-fi</p>
            </div>
          </Link>
          <Link href={coindropLink}>
            <div className={styles.option}>
              <img src="/coindrop.png" alt=""></img>
              <p>Coindrop</p>
            </div>
          </Link>
          <Link href={paypalLink}>
            <div className={styles.option}>
              <img src="/paypal.png" alt=""></img>
              <p>PayPal</p>
            </div>
          </Link>
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
