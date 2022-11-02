import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import styles from "./Topbar.module.css";

class Topbar extends Component {
  handleKnowMore = () => {
    const knowMoreDiv = document.getElementsByClassName("know-more")[0];
    const knowMoreDivNode = ReactDOM.findDOMNode(knowMoreDiv);
    knowMoreDivNode.style.display = "none";
  };
  render() {
    return (
      <div className={styles.topbar}>
        <div className={`${styles.knowMore} know-more`}>
          <p className={styles.knowMoreText}>
            Now get exciting rewards on learning.{" "}
          </p>

          <a
            href="https://www.edyoda.com/learn-and-earn"
            target="_blank"
            className={styles.knowMoreLink}
            rel="noopener noreferrer"
          >
            Know More
          </a>

          <div className={styles.hideKnowMore} onClick={this.handleKnowMore}>
            <div className={styles.hideLine}></div>
            <div className={styles.hideLine}></div>
          </div>
        </div>
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
                <a href="https://www.edyoda.com/home">Go To Main Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
