import React, { useEffect } from "react";
import styles from "./Posts.module.css";
import Card from "../Card/Card";

export default function Posts(props) {
  const { allPosts, currentTag } = props;
  useEffect(() => {}, [currentTag]);
  return (
    <div>
      <section>
        <div className={styles.card__wrap}>
          {currentTag === "All"
            ? allPosts.map((post) => {
                return <Card post={post} key={post.postId} />;
              })
            : allPosts
                .filter((post) => post.tag === currentTag)
                .map((post) => {
                  return <Card post={post} key={post.postId} />;
                })}
        </div>
      </section>
    </div>
  );
}
