import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "components/posts/Post"
import { db } from "firebaseConfig"

function App() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      }))))
  }, [])

  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" alt="" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>
      <h1>hellow moez</h1>
      {posts.map(({ id, post }) => <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      )}
    </div>
  );
}

export default App;
