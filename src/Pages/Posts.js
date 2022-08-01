import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostWrapper from '../components/PostWrapper';
import { getDatabase, ref, onValue } from 'firebase/database';
import '../App.css';
const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const posts = useSelector((state) => state.post.posts);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const arr = [];
      for (const key in data) {
        arr.push({
          id: key,
          message: data[key].post,
        });
      }
      setLoading(false);
      setData(arr);
    });
  }, []);
  console.log(data);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {loading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {data.length === 0 && !loading ? (
        <h1>Nothing to Display. Add a post to show here</h1>
      ) : (
        data &&
        data.map((post) => {
          console.log(data);

          return (
            <PostWrapper key={post.id} id={post.id} message={post.message}>
              <h3>{post.message}</h3>
            </PostWrapper>
          );
        })
      )}
    </div>
  );
};

export default Posts;
