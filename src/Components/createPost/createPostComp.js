import React, { useState } from "react";
import { createPost } from "../../Services/post";

import "./createPostComp.css";

const CreatePostComp = (props) => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("simple");

  async function handleCreatePost(e) {
    e.preventDefault();
    await createPost({
      date,
      text,
      title,
      type
    });
    props.history.push("/");
    console.log("PROBADO EL CREATE");
  }

  return (
    <div className="createPost__container">
      <h3 className="createPost__title">
        Rellena el formulario para subir un nuevo file
      </h3>
      <form className="createPost__form" onSubmit={handleCreatePost}>
        <div className="createPost__input__container">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
            required
          />
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Text"
          />
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            required
          />
          <select
            placeholder="Type"
            onChange={e => setType(e.target.value)}
            value={type}
          > 
            <option value="simple">Simple</option>
            <option value="custom">Custom</option>
            <option value="advanced">Advanced</option>
          </select>
          <input type="file" className="createPost__file" />
        </div>
        <button className="createPost__button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePostComp;
