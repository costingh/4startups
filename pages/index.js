import styles from "../styles/Home.module.css";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO />
      <Navbar />

      <main className={styles.main}>
        <p className={styles.smallText}>Tools for startups</p>
        <h2>The best tools you need for your business.</h2>
        <p className={styles.subHeading}>
          Find our top hand-picked professional tools to boost your startup!
        </p>
        <Link href="/categories">
          <a className={styles.btnSolid}>Explore Categories</a>
        </Link>

        <p className={styles.smallDescription}>
          Program developed to help entrepreneurs take advantage of best ICT
          solutions to help grow their businesses.
        </p>
      </main>
    </div>
  );
}
