import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postActions } from '../store/post-slice';

const AddPost = () => {
  const [message, setMessage] = useState();

  const navigate = useNavigate();
  const numberOfPosts = useSelector((state) => state.post.posts.length);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const post = {
      id: numberOfPosts + 1,
      message: message,
    };
    dispatch(postActions.addPost(post));
    setMessage('');
    navigate('/posts');
  };
  return (
    <div
      style={{
        width: '100%',
        background: '#EFF2F5',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={submitHandler}>
        <input
          style={{ width: '100%', padding: '10px' }}
          type="text"
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button>Add A Post</button>
  
      </form>
    </div>
  );
};

export default AddPost;
