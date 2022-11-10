import React from "react";
import styles from "./Topbar.module.css";
import TopStrip from "../TopStrip/TopStrip";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.topbar}>
      <TopStrip />
      <div className={styles.navbar}>
        <div className={styles.logo} onClick={() => navigate("/")}>
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
              <a
                href="https://www.edyoda.com/home"
                target="_blank"
                rel="noreferrer"
              >
                Go To Main Website
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hamburger}>
          {[1, 2, 3].map((key) => (
            <div key={key} className={styles.hamburgerLine}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
