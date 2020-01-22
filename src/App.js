import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";
import { Posts } from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //Hooks LifeCyle Method
  //Runs when ever the components Mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Implementing Pagination
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //It will slice out 10 posts
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      ></Pagination>
    </div>
  );
};

export default App;
