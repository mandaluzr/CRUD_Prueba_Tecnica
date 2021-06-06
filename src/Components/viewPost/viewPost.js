import { getPosts } from "../../Services/posts";
import { deletePost } from "../../Services/post/index";
import React, { useEffect, useState } from "react";
import "./viewPost.css";

const ViewPost = (...props) => {
  const post = [];
  console.log(props);

  return (
    <div className="post__container">
      <h1 className="post__title"> Aquí verás el post</h1>
      <span className="post__description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."{" "}
      </span>
      <div className="imagenes__container">
        <h2>{post.title} </h2>
        <img src={post.image} alt="LOREM IPSUM" width={460} height={260} />
      </div>
      <div className="post__button__container">
        <div className="date__input">
          <label className="start__label">Start date:</label>
          <br />
          <input
            type="date"
            id="start"
            value="2021-06-08"
            min="2018-01-01"
            max="2022-08-05"
          />
        </div>
        <button
          onClick={deletePost}
          onChange={"hola"}
          className="delete__button"
        >
          Delete
        </button>
      </div>
    </div>
      );
  };

export default ViewPost;
