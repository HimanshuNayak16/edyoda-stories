import React from "react";
import styles from "./Posts.module.css";
import Card from "../Card/Card";

export default function Posts(props) {
  return (
    <div>
      <section>
        <div className={styles.card__wrap}>
          {props.posts.map((post) => {
            return <Card post={post} key={post.postId} />;
          })}
        </div>
      </section>
    </div>
  );
}
