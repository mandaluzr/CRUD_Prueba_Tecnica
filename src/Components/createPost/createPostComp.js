import React, { useEffect, useState } from 'react';
import { createPost } from "../../Services/post";

import './createPostComp.css';

const CreatePostComp = (post) => {

  const {
    title,
    text,
    image,
    date
  } = post;

    const [uploadPost, setUploadPost] = useState([]);


    async function handleCreatePost(e) {
      e.preventDefault();
      createPost();

      console.log('PROBADO EL CREATE');

    }



    useEffect(() => {
        async function fetch() {
          const data = await createPost(true);
    
          setUploadPost(data.data);
        }
    
        fetch();
      }, []);

    return (
    <div className="createPost__container">
        <h3 className="createPost__title">
        Rellena el formulario para subir un nuevo file
      </h3>
      <form className="createPost__form">
          <div className="createPost__input__container">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Text" />
        <input type="date" required />
        <input type="file" className="createPost__file" />
        </div>
        <button onClick={handleCreatePost} className="createPost__button">Create</button>
      </form>
    </div>
    )
}

export default CreatePostComp;