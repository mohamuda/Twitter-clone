import React, {useState} from 'react'
import { Avatar, Button } from "@mui/material";
import db  from "./firebase";
import {serverTimestamp} from "firebase/firestore";

export default function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Abdullahi Mohamud",
      username: "Mohamuda",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.postimg.cc/rFHKkNhm/aldi-sigun-unt3066-GV-E-unsplash.jpg",
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };


  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.postimg.cc/rFHKkNhm/aldi-sigun-unt3066-GV-E-unsplash.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

