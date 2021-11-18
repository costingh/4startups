import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { marketingSections } from "../constants/marketingSections";
import { onlinePresenceSections } from "../constants/onlinePresenceSections";
import { categoriesList } from "../constants/categories";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenuOpened, setMegaMenuOpened] = useState(false);

  const handleMouseEnter = (e) => {
    if (!megaMenuOpened) setMegaMenuOpened(true);
  };

  const handleMouseLeave = (e) => {
    if (megaMenuOpened) setMegaMenuOpened(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarLeft}>
          <Link href="/">
            <div className={styles.logo}>
              <div className={styles.logoImageContainer}>
                <div className={styles.layer1}> </div>
                <div className={styles.layer2}> </div>
                <div className={styles.layer3}>4</div>
              </div>
              <p className={styles.logoText}>startups</p>
            </div>
          </Link>
          <Link href="/categories">
            <a
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Categories
              {/* mega-menu */}
              {megaMenuOpened && (
                <div className={styles.megaMenu}>
                  {categoriesList.map((category) => (
                    <div className={styles.column}>
                      <Link href={category.link}>
                        <p>{category.name}</p>
                      </Link>
                      <div className={styles.sections}>
                        {category.name === "Marketing" &&
                          marketingSections.map((item) => (
                            <Link href={item.link} className={styles.itemLink}>
                              {item.name}
                            </Link>
                          ))}
                        {category.name === "Online Presence" &&
                          onlinePresenceSections.map((item) => (
                            <Link href={item.link} className={styles.itemLink}>
                              {item.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </a>
          </Link>
          <Link href="/about">
            <div className={styles.navLink}>About</div>
          </Link>
          <Link href="/support-me">
            <a className={styles.navLink}>Support Me</a>
          </Link>
        </div>
        <Link href="/categories">
          <a className={styles.navbarRight}>Try it NOW</a>
        </Link>
        {mobileMenu ? (
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className={styles.hamburgerMenu}
            onClick={() => setMobileMenu(false)}
          >
            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className={styles.hamburgerMenu}
            onClick={() => setMobileMenu(true)}
          >
            <path
              d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
              fill="#1040e2"
            />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg>
        )}
      </div>

      {/* mobile nav */}
      <div
        className={styles.mobileNav}
        style={{ maxHeight: `${mobileMenu ? "1000px" : "0px"}` }}
      >
        <Link href="/categories">
          <a className={styles.navMobileLink}>Categories</a>
        </Link>
        <Link href="/about">
          <a className={styles.navMobileLink}>About</a>
        </Link>
        <Link href="/support-me">
          <a className={styles.navMobileLink}>Support Me</a>
        </Link>
        <Link href="/categories">
          <a className={styles.navMobileBtn}>Try it NOW</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
