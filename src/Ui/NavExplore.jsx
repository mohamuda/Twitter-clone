import React from "react";
import news from "../img/Explore _ Twitterimg.jpg";

export default function NavExplore() {
  return (
    <div className="NavExplore__container">
      <div className="NavExplore__container--para">
        <p>Politics · August 22, 2022 </p>
        <h3>
          The Solicitor-General has said former prime minister Morrison's
          ministerial self-appointments were valid
        </h3>
      </div>
      <img className="NavExplore__img" src={news} />
    </div>
  );
}
