import React, { Component } from "react";
import styles from "./PostPage.module.css";

export class PostPage extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.pageCard}>
          <img
            className={styles.pageImage}
            src={this.props.post.imageUrl}
            alt=""
          />
          <div className={styles.pageContent}>
            <h1 className={styles.pageTitle}>{this.props.post.postTitle}</h1>
            <div className={styles.author_container}>
              <span className={styles.author}>
                {this.props.post.postAuthor + " "}
              </span>
              <span className={styles.date}>
                | {this.props.post.postSubmissionDate}
              </span>
            </div>
            <p className={styles.postDesc}>{this.props.post.postDesc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPage;
