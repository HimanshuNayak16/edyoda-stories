import React from "react";
import styles from "./TopStrip.module.css";

export default function TopStrip() {
  const [show, toggleShow] = React.useState(true);
  return (
    <div>
      {show ? (
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

          <div
            className={styles.hideKnowMore}
            onClick={() => toggleShow(!show)}
          >
            <div className={styles.hideLine}></div>
            <div className={styles.hideLine}></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
