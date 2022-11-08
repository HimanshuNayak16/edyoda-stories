import React from "react";
import styles from "./Filter.module.css";

function Filter(props) {
  const { setCurrentTag } = props;
  return (
    <div className={styles.categoriesContainer}>
      <h1 className={styles.categoriesHeading}>Trending Posts</h1>
      <div className={styles.categoriesFilterDiv}>
        <span className={styles.filterIconSpan}>
          <i className="fa fa-filter"></i>
        </span>
        <p className={styles.filterText}>Filter by Category</p>
      </div>
      <div className={styles.categoriesContentDiv}>
        <a
          className={`${styles.categories}`}
          onClick={() => setCurrentTag("All")}
        >
          All
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Artificial Intelligence")}
        >
          Artificial Intelligence
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Cloud Computing")}
        >
          Cloud Computing
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("DevOps")}
        >
          DevOps
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Programming Languages")}
        >
          Programming Languages
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Mobile Application Development")}
        >
          Mobile Application Development
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Technology and Tools")}
        >
          Technology and Tools
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Get a Job in a Tech Company")}
        >
          Get a Job in a Tech Company
        </a>
        <a
          className={styles.categories}
          onClick={() => setCurrentTag("Others")}
        >
          Others
        </a>
      </div>
    </div>
  );
}

export default Filter;
