import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavButtons from "./NavButtons";
import ToolThumbnail from "./ToolThumbnail";
import styles from "../styles/Marketing.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { marketingSections } from "../constants/marketingSections";
import { onlinePresenceSections } from "../constants/onlinePresenceSections";
import { financesSections } from "../constants/financesSections";
import { humanResourcesSections } from "../constants/humanResourcesSections";
import { workflowSections } from "../constants/workflowSections";
import { communicationSections } from "../constants/communicationSections";
import SEO from "./SEO";

function MarketingLayout({ toolsList, content }) {
  const router = useRouter();
  const [currentSections, setCurrentSections] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("Startups");

  const isActive = (item) => {
    if (router.route === item.link) return true;
    else return false;
  };

  useEffect(() => {
    if (router.route.startsWith("/categories/marketing")) {
      setCurrentSections(marketingSections);
      setCurrentTitle("Marketing");
    } else if (router.route.startsWith("/categories/online-presence")) {
      setCurrentSections(onlinePresenceSections);
      setCurrentTitle("Web Presence");
    } else if (router.route.startsWith("/categories/finances")) {
      setCurrentSections(financesSections);
      setCurrentTitle("Finances");
    } else if (router.route.startsWith("/categories/human-resources")) {
      setCurrentSections(humanResourcesSections);
      setCurrentTitle("Human Resources");
    } else if (router.route.startsWith("/categories/workflow")) {
      setCurrentSections(workflowSections);
      setCurrentTitle("Workflow");
    } else if (router.route.startsWith("/categories/communication")) {
      setCurrentSections(communicationSections);
      setCurrentTitle("Communication");
    }
  }, []);

  return (
    <>
      <SEO title={currentTitle} />
      <Navbar />
      <div className={styles.displayFlex}>
        <div className={toolsList ? styles.flexLeft2 : styles.flexLeft}>
          {currentSections.map((item) => (
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
              <p className={styles.smallText}>{content.name}</p>
              <h2>{content.heading}</h2>
              <p className={styles.subHeading}>{content.muted}</p>
              <div className={styles.tipContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
                </svg>
                <p className={styles.smallDescription}>{content.description}</p>
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
