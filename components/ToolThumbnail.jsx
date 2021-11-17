import React from "react";
import styles from "../styles/ToolThumbnail.module.css";

function ToolThumbnail({ link, name, image }) {
  return (
    <a target="_blank" href={link} rel="noopener noreferrer">
      <div className={styles.container}>
        <img src={image} alt={name}></img>
        <div className={styles.name}>{name}</div>
      </div>
    </a>
  );
}

export default ToolThumbnail;
