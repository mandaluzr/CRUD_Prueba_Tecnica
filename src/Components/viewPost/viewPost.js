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
    <div className="viewPost__container">
      <h1 className="viewPost__title">{post.title} </h1>
      <span className="viewPost__description">{post.text}</span>
      <div className="imagenes__container">
        <img src={post.image} alt="" width={460} height={260} />
      </div>
      <div className="viewPost__button__container">
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

  async function handleDeleteClick() {
    alert("¿¡Seguro quieres eliminar esto!?");
    await deletePost(id);

    props.history.push("/");
  }
};

export default ViewPost;

