import { getPosts } from "../../Services/posts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {DetailButton} from "../detailButton/detailButton.js"

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
      <h1>HOLITAS PERRITO MALVADO</h1>

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
            <h1 className="postList__title">{postDetail.title} </h1>
            <Link to={`/post/${postDetail.id}`}>
              {renderImage(postDetail.image, postDetail.alt)}
            </Link>
            <Link>
              <DetailButton />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
