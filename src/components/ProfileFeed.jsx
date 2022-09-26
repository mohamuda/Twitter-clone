import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Background from "../img/leonhard-niederwimmer-qu7S1EDfK3Y-unsplash.jpg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function ProfileFeed() {
  return (
    <>
      <div className="feed">
        <div className="Lists__header">
          <ArrowBackIcon className="ArrowBackIcon__icont" />
          <div className="Lists__header--items">
            <h2>Abdullahi Mohamud</h2>
            <p>44 Tweets</p>
          </div>
        </div>
        <div className="backgroundImg--container">
          <img className="backgroundImg" src={Background} />
          <img
            className="profile--image"
            src="https://i.postimg.cc/rFHKkNhm/aldi-sigun-unt3066-GV-E-unsplash.jpg"
          />
        </div>
        <div className="Edit--button">
          <button className="profile--button">Edit profile</button>
        </div>
        <div className="profile--information">
          <h2>Abdullahi Mohamud</h2>
          <p>@mohamuda</p>
        </div>
        <div className="profile--date">
          <CalendarMonthOutlinedIcon style={{ color: "#657786" }} />
          <p>Joined April 2009</p>
        </div>
        <div className="profile--list">
          <ul className="profile--list__items">
            <li>Tweets</li>
            <li>Tweets & replies</li>
            <li>Media</li>
            <li>Likes</li>
          </ul>
        </div>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="9NewsSyd"
          options={{ height: 400 }}
        />
      </div>
    </>
  );
}
