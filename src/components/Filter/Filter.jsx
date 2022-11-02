import React, { Component } from "react";
import styles from "./Filter.module.css";

class Filter extends Component {
  render() {
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
          <a href="#" className={`${styles.categories} active`}>
            All
          </a>
          <a href="#" className={styles.categories}>
            Artificial Intelligence
          </a>
          <a href="#" className={styles.categories}>
            Cloud Computing
          </a>
          <a href="#" className={styles.categories}>
            DevOps
          </a>
          <a href="#" className={styles.categories}>
            Programming Languages
          </a>
          <a href="#" className={styles.categories}>
            Mobile Application Development
          </a>
          <a href="#" className={styles.categories}>
            Technology and Tools
          </a>
          <a href="#" className={styles.categories}>
            Get a Job in a Tech Company
          </a>
          <a href="#" className={styles.categories}>
            Others
          </a>
        </div>
      </div>
    );
  }
}

export default Filter;
