import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavButtons from "./NavButtons";
import ToolThumbnail from "./ToolThumbnail";
import styles from "../styles/Marketing.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { marketingSections } from "../constants/marketingSections";

function MarketingLayout({ toolsList }) {
  const router = useRouter();

  const isActive = (item) => {
    if (router.route === item.link) return true;
    else return false;
  };

  return (
    <>
      <Navbar />
      <div className={styles.displayFlex}>
        <div className={toolsList ? styles.flexLeft2 : styles.flexLeft}>
          {marketingSections.map((item) => (
            <Link href={item.link} key={item.name}>
              <div className={isActive(item) && styles.active}>{item.name}</div>
            </Link>
          ))}
        </div>
        <div className={toolsList ? styles.flexRight2 : styles.flexRight}>
          {toolsList ? (
            toolsList.map((tool) => (
              <ToolThumbnail
                key={tool.name}
                link={tool.link}
                name={tool.name}
                image={tool.image}
              />
            ))
          ) : (
            <div className={styles.wrapper}>
              <p className={styles.smallText}>Marketing</p>
              <h2>Digital Marketing Tools You Need When Starting a Business</h2>
              <p className={styles.subHeading}>
                Did you know there are more than 30 million small businesses in
                the United States alone?
              </p>
              <div className={styles.tipContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
                </svg>
                <p className={styles.smallDescription}>
                  With a number like this, small business owners need a
                  competitive edge. If you are building a business, chances are
                  you’re looking for ways to get your leg up on the competition.
                  To accomplish this, you’ll need a good marketing strategy and
                  access to the best digital marketing tools.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <NavButtons />
    </>
  );
}

export default MarketingLayout;
