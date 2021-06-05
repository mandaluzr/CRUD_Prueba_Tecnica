import React from "react";


import "./postList.css";
import PostData from "../../Data/posts.json";

const PostList = () => {

    const handleToggle = (e) => {
        console.log('quiero hacer upload');
    };




  return (
    <div className="postList__container">
      <h1>HOLITAS PERRITO MALVADO</h1>

      <button className="upload__button" type="file" onClick={handleToggle} > Cargar Imagen </button>

      {PostData.map((postDetail, index) => {
        return (
          <div className="imagenes__container">
            <h1>{postDetail.title} </h1>
            <img
              src={postDetail.image}
              alt="cover"
              width={460}
              height={260}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
