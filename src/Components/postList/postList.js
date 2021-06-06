import { getPosts } from "../../Services/posts";
import React, { useEffect, useState } from "react";

import "./postList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const handleToggle = (e) => {
    console.log("quiero hacer upload");
  };

  useEffect(() => {
    async function fetch() {
      const data = await getPosts();

      setPosts(data.data);
    }

    fetch();
  }, []);

  return (
    <div className="postList__container">
      <h1>HOLITAS PERRITO MALVADO</h1>

    <div className="select__container" >
      <select className="select__button" type="file" onClick={handleToggle}>
        {" "}
        <option>
        Simple{" "} 
        </option>
        <option>
        Custom{" "} 
        </option>
        <option>
        Advanced{" "} 
        </option>
      </select>
      </div>

      {posts.map((postDetail, index) => {
        return (
          <div className="imagenes__container" key={`post-${postDetail.id}`}>
            <h1>{postDetail.title} </h1>
            <img src={postDetail.image} alt="cover" width={460} height={260} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
