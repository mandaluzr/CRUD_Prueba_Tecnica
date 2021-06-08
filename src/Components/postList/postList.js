import { getPosts } from "../../Services/posts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./postList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  function handleChange(e) {
    const type = e.target.value;
    let filteredPostsTest;

    if (type === "all") {
      filteredPostsTest = posts;
    } else {
      filteredPostsTest = posts.filter((post) => {
        return post.type === type;
      });
    }

    setFilteredPosts(filteredPostsTest);
  }

  useEffect(() => {
    async function fetch() {
      const data = await getPosts();

      setPosts(data.data);
      setFilteredPosts(data.data);
    }

    fetch();
  }, []);

  function renderImage(src, alt) {
    if (src) {
      return <img src={src} alt={alt} className="postList__image" />;
    } else {
      return null;
    }
  }

  return (
    <div className="postList">
      <h1 className="postList__title">Pincha en el botón de abajo para crear tu post</h1>
      <Link to={"/createpost"} >
      <button className="createPost__button" > Crea tu Post!</button>
      </Link>
      <div className="select__container">
        <select
          className="select__button"
          placeholder="Filter"
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="simple">Simple</option>
          <option value="custom">Custom</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {filteredPosts.map((postDetail, index) => {
        return (
          <div className="postList__container" key={`post-${postDetail.id}`}>
            <div className="postList__picture__container" > 
            {renderImage(postDetail.image, postDetail.alt)}
            </div>
            <div className="postList__text__container">
            <h1 className="postList__title">{postDetail.title} </h1>
            <span className="postList__type">{postDetail.type} </span>
            </div>
            <div className="postList__detail__button__container">
            <Link to={`/post/${postDetail.id}`}>
              <button className="postList__detail__button">Detail</button>
            </Link>
            </div>
          </div>
        );
      })}
        <div className="paging__container">
            <div className="paging__box" >Page 1</div>
            <div className="paging__box" >Page 2</div>
            <div className="paging__box" >...</div>
        </div>
    </div>
  );
};

export default PostList;
