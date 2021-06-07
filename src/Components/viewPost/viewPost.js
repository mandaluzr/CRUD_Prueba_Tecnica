import { deletePost, getPost } from "../../Services/post";
import React, { useEffect, useState } from "react";
import "./viewPost.css";

const ViewPost = (props) => {
  const id = props.match.params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await getPost(id);

      if (data.data) {
        setPost(data.data);
      }
    }

    fetch();
  }, []);

  return (
    <div className="viewpost__container">
      <h1 className="viewpost__title"> Aquí verás el post</h1>
      <span className="viewpost__description">{post.text}</span>
      <div className="imagenes__container">
        <h2>{post.title}</h2>
        <img src={post.image} alt="LOREM IPSUM" width={460} height={260} />
      </div>
      <div className="viewpost __button__container">
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
        <button onClick={handleDeleteClick} className="delete__button">
          Delete
        </button>
      </div>
    </div>
  );

  function handleDeleteClick() {
    deletePost(id, props.history.push);
  }
};

export default ViewPost;
