import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postActions } from '../store/post-slice';
import { useDispatch } from 'react-redux';
const EditPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState(location.state.message);
  const id = location.state.id;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postActions.updatePost({ message, id }));
    navigate('/posts');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          style={{ padding: '10px' }}
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <br></br>
        <button style={{ padding: '10px', marginTop: '10px' }}>Update</button>
      </form>
    </div>
  );
};

export default EditPost;
