import React from "react";
import Navbar from "../components/Navbar";
import NavButtons from "../components/NavButtons";
import styles from "../styles/SupportMe.module.css";
import Link from "next/link";
import SEO from "../components/SEO";

function SupportMe() {
  return (
    <div>
      <SEO title="About" />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>What is our goal?</h1>
          <p
            className={styles.description}
            style={{ textAlign: "justify", fontSize: "17px" }}
          >
            4Startups is a program developed to help entrepreneurs find the
            right ICT solutions to grow their businesses. We offer plenty of
            choices to choose from. If you need a solution for marketing, social
            media management, analytics, HR, communication, workflow,
            productivity, online presence and mor, check our suggestions. We
            hand-picked some of the most popular with good reviews & reputation
            solutions for solving all of your problems.
          </p>
          <Link href="/categories">
            <div className={styles.firstOption}>
              <img src="/favicon.png" alt=""></img>
              <p>Start Exploring</p>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.option}>
              <p>Home</p>
            </div>
          </Link>
          <p className={styles.muted}>
            We are not yet affiliated with any of the products listed on this
            website.
          </p>
        </div>
      </div>
      <NavButtons />
    </div>
  );
}

export default SupportMe;
