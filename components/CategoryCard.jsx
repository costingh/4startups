import styles from "../styles/Categories.module.css";
import Link from "next/link";

function CategoryCard({
  name,
  description,
  svgPath,
  link,
  bgColor,
  textColor,
}) {
  return (
    <Link href={link}>
      <div className={styles.categoryCard}>
        <svg
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 24 24"
        >
          <path d={svgPath} />
        </svg>
        <h2>{name}</h2>
        <p>{description}</p>

        <div
          className={styles.fromBottom}
          style={{ background: bgColor, color: textColor }}
        >
          {/*  <Link href={link}> */}
          <a>View now!</a>
          {/*  </Link> */}
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
