import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/addPost">Add a Post</Link>
    </div>
  );
};

export default NavBar;
