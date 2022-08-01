import React from 'react';
import { postActions } from '../store/post-slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const PostWrapper = ({ children, id, message }) => {
  console.log(id);
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(postActions.deletePost(id));
  };
  return (
    <div
      style={{
        background: '#EFF2F5',
        width: '500px',
        borderRadius: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      {children}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={'/editPost'} state={{ id, message }}>
          <button>Edit</button>
        </Link>
        <button onClick={handelDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PostWrapper;
