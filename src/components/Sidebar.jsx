import React, { useState, useEffect } from "react";
import SidebarOptions from "../Ui/SidebarOptions";
import MoreOptions from "../Ui/MoreOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Avatar, Button } from "@mui/material";
import db from "../Ui/firebase";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import RunCircleOutlinedIcon from "@mui/icons-material/RunCircleOutlined";
import { useRef } from "react";
import { serverTimestamp } from "firebase/firestore";

export default function Sidebar() {
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
      avatar:
        "https://i.postimg.cc/rFHKkNhm/aldi-sigun-unt3066-GV-E-unsplash.jpg",
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
    toggleModal();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [isModal, setisModal] = useState(false);

  const togglemoreModal = () => {
    setisModal(!isModal);
  };

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        togglemoreModal();
      }
    });
  });

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOptions active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/Explore" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={TagIcon} text="Explore" />
      </Link>
      <Link to="/Notifications" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      </Link>
      <Link to="/Messages" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      </Link>
      <Link to="/Bookmarks" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      </Link>
      <Link to="/Lists" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
      </Link>
      <Link to="/Profile" style={{ textDecoration: "none" }}>
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      </Link>
      <button className="sidebarOptions--button" onClick={togglemoreModal}>
        {" "}
        <PendingOutlinedIcon />
        <h2>More</h2>
      </button>
      {/* Button Tweet */}
      <button
        variant="outlined"
        className="sidebar__tweet"
        onClick={toggleModal}
      >
        <p>Tweet</p>
      </button>
      <button className="sidebar__tweeticon" onClick={toggleModal}>
        <TwitterIcon />
      </button>

      {modal && (
        <div className="modal--background">
          <div className="Tweetmodal">
            <div className="Tweetmodal--container">
              <button className="Tweetmodal--button" onClick={toggleModal}>
                {" "}
                <CloseOutlinedIcon />
              </button>
            </div>
            <form>
              <div className="Tweetmodal__input">
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
                className="Tweetmodal__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
              />

              <Button
                onClick={sendTweet}
                type="submit"
                className="Tweetmodal__tweetButton"
              >
                Tweet
              </Button>
            </form>
          </div>
        </div>
      )}

      {isModal && (
        <div className="modal--background">
          <div ref={menuRef} className="MoreSidebar">
            <MoreOptions
              Icon={PersonAddOutlinedIcon}
              text="Follower requests"
            />
            <MoreOptions Icon={SmsOutlinedIcon} text="Topics" />
            <MoreOptions Icon={BoltOutlinedIcon} text="Moments" />
            <MoreOptions Icon={TwitterIcon} text="Twitter Blue" />
            <MoreOptions Icon={FeedOutlinedIcon} text="Newsletters" />
            <MoreOptions
              Icon={RocketLaunchOutlinedIcon}
              text="Twitter for professionals"
            />
            <MoreOptions Icon={CallMadeOutlinedIcon} text="Twitter Ads" />
            <MoreOptions Icon={EqualizerOutlinedIcon} text="Analytics" />
            <MoreOptions
              Icon={SettingsOutlinedIcon}
              text="Settings and privacy"
            />
            <MoreOptions Icon={HelpOutlineOutlinedIcon} text="Help Center" />
            <MoreOptions Icon={TvOutlinedIcon} text="Display" />
            <MoreOptions
              Icon={RunCircleOutlinedIcon}
              text="Keyboard shortcuts"
            />
          </div>
        </div>
      )}
    </div>
  );
}
