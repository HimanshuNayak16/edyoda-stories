import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/${props.post.postPath}`)}
    >
      <figure className={styles.card_image_section}>
        <img src={props.post.imageUrl} alt={props.post.imageAltText} />
      </figure>
      <div className={styles.card_text_section}>
        <figcaption className={styles.card_title}>
          {props.post.postTitle.length > 35
            ? props.post.postTitle.substring(0, 35) + "..."
            : props.post.postTitle}
        </figcaption>
        <div className={styles.author_container}>
          <span className={styles.author}>{props.post.postAuthor + " "}</span>
          <span className={styles.date}>| {props.post.postSubmissionDate}</span>
        </div>
        <div className={styles.card_desc}>
          <p>
            {props.post.postDesc.length > 150
              ? props.post.postDesc.substring(0, 150) + "..."
              : props.post.postDesc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
