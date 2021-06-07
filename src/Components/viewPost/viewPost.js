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
      <div className="viewpost__button__container">
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
    alert('Seguro quieres eliminar esto!???')
    deletePost(id, props.history.push);
  }
};

export default ViewPost;


/*    {
      "id": 1,
      "title": "Puente",
      "text": "Aquí podemos ver un puentecito. Sigo escribiendo este texto random para ver como se ve. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      "image": "https://images.unsplash.com/photo-1535986057686-8302eb74360e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "date": "5/7/2021",
      "type": "advanced"
    }, */