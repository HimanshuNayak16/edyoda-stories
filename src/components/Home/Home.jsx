import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import Posts from "../Posts/Posts";
import styles from "./Home.module.css";
import { posts } from "../../posts";

function Home() {
  const [allPosts] = useState(posts);
  const [currentTag, setCurrentTag] = useState("All");

  useEffect(() => {}, [currentTag]);
  return (
    <div className={styles.homePage}>
      <Filter allPosts={allPosts} setCurrentTag={setCurrentTag} />
      <Posts allPosts={allPosts} currentTag={currentTag} />
    </div>
  );
}

export default Home;
