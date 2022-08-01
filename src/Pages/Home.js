import React from 'react';
import PostWrapper from '../components/PostWrapper';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>CRUD Operation</h1>
      <h2>Create * Read * Update * Delete</h2>
      <h4>With React-Redux-Toolkit</h4>
      <h5>By Ishraque</h5>
    </div>
  );
};

export default Home;
