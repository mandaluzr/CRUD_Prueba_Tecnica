import React from 'react';

import './createPost.css';

const CreatePost = () => {

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
        <input type="submit" placeholder="Enviar" className="createPost__button" />
      </form>
    </div>
    )
}

export default CreatePost;