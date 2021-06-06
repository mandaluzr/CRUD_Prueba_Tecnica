import React from "react";
// import PostData from '../../Data/posts.json'

const ViewPost = (...props) => {
    return null;
    const post = [];
    console.log(props)

  return (
    <>
      <h1> Aquí verás el post</h1>
          <div className="imagenes__container">
            <h1>{post.title} </h1>
            <img
              src={post.image}
              alt="LOREM IPSUM"
              width={460}
              height={260}
            />
          </div>
    </>
  );
};

export default ViewPost;
