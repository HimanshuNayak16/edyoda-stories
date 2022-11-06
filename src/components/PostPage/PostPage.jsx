import React, { Component } from "react";
import styles from "./PostPage.module.css";

export class PostPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.pageCard}>
          <img
            className={styles.pageImage}
            src={this.props.post.imageUrl}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default PostPage;
