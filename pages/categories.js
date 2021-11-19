import React from "react";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
import styles from "../styles/Categories.module.css";
import NavButtons from "../components/NavButtons";
import { categoriesList } from "../constants/categories";
import SEO from "../components/SEO";

function categories() {
  return (
    <>
      <SEO title={"Categories"} />
      <Navbar />

      <main className={styles.main}>
        <div className={styles.innerMain}>
          {categoriesList.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
              svgPath={category.svgPath}
              link={category.link}
              bgColor={category.background}
              textColor={category.color}
            />
          ))}
        </div>
        <NavButtons />
      </main>
    </>
  );
}

export default categories;
