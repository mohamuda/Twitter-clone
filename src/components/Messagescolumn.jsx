import React from "react";
import SettingsOutlinedIcno from "@mui/icons-material/SettingsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchIcon from "@mui/icons-material//Search";
import profile1 from "../img/Profile1.jpg";
import profile2 from "../img/Profile2.jpg";
import profile3 from "../img/Profile3.jpg";

export default function Messagescolumn() {
  return (
    <div className="message__contianer">
      <div className="messageColumn">
        <div className="messageColumn--header">
          <h2>Messages</h2>
          <div className="MessageIcons">
            <SettingsOutlinedIcno className="Message__SettingsOutlinedIcnon" />
            <EmailOutlinedIcon className="message__EmailOutlinedIcon" />
          </div>
        </div>
      </div>

      <div className="messages__input--container">
        <div className="messages__input">
          <SearchIcon className="messages__searchIcon" />
          <input placeholder="Search Direct Message" type="text" />
        </div>
      </div>
      <div className="messagefeed--container">
        <div className="message__block">
          <img className="message__img" src={profile1} />
          <div className="message__bulk--content">
            <div className="message__bulk--from">
              <h6>James Louden</h6>
              <p>@james1234</p>
            </div>
            <div className="message__bulk--about">
              <p>Hi james, long time no see ....</p>
            </div>
          </div>
        </div>

        <div className="message__block">
          <img className="message__img" src={profile2} />
          <div className="message__bulk--content">
            <div className="message__bulk--from">
              <h6>Kobe Poole</h6>
              <p>@Poolegolden</p>
            </div>
            <div className="message__bulk--about">
              <p>Hi Kobe, long time no see ....</p>
            </div>
          </div>
        </div>

        <div className="message__block">
          <img className="message__img" src={profile3} />
          <div className="message__bulk--content">
            <div className="message__bulk--from">
              <h6>Lance born</h6>
              <p>@lancealot</p>
            </div>
            <div className="message__bulk--about">
              <p>Hi lance, long time no see ....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
