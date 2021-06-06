import { getPosts } from "../../Services/posts";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import "./postList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleToggle = (e) => {
    return;
  };


function handleChange(e) {
  const type = e.target.value;
  const filteredPostsTest = posts.filter((post) => post.type === type);
  
  setFilteredPosts(filteredPosts);

    posts.filter(filteredPostsTest => {
      return filteredPostsTest.type
    })
    console.log(type);
}

  /*    setPostSimple({
        ...postSimple,
        [e.target.name]: e.target.value
    }); */

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
      <select className="select__button" type="file"  placeholder="Filter" onClick={handleToggle} onChange={handleChange}>
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
            <Link to={`/post/${postDetail.id}`}>
            <img src={postDetail.image} alt="cover" width={460} height={260} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
