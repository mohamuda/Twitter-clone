import React, { useState, useEffect } from "react";
import TweetBox from "../Ui/TweetBox";
import Post from "../Ui/Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  /* access posts, then checking through the data for changes then mapping the snapshots to an array of data to be processed 
within the posts */

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
