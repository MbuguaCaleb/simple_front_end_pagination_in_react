import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";
import { Users } from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  //Hooks LifeCyle Method
  //Runs when ever the components Mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://ti-react-test.herokuapp.com/users");
      setUsers(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Implementing Pagination
  //Get current number of users
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  //It will slice out 10 users
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  //Page Number Param has been passed from previous component as a prop
  //Setting the state via the hooks
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Users users={currentUsers} loading={loading}></Users>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default App;
