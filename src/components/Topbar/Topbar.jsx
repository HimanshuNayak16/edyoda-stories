import React from "react";
import styles from "./Topbar.module.css";
import TopStrip from "../TopStrip/TopStrip";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <TopStrip />
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1 className={styles.brand}>Edyoda</h1>
          <p className={styles.stories}>Stories</p>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.categoriesDropdown}>
            <p className={styles.exploreText}>Explore Categories</p>
            <div>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className={styles.secondaryMenuItems}>
            <div className={styles.about}>
              <p>
                EdYoda is free learning and knowledge sharing platform for
                techies
              </p>
            </div>
            <div className={styles.mainWebsiteLink}>
              <a href="https://www.edyoda.com/home" target="_blank">
                Go To Main Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
