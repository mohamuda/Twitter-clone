import React from "react";
import SearchIcon from "@mui/icons-material//Search";
import SettingsOutlinedIcno from "@mui/icons-material/SettingsOutlined";
import NavExplore from "../Ui/NavExplore";
import Navitems from "../Ui/Navitems";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function ExploreFeed() {
  return (
    <div className="feed">
      <div className="Explorewidgets__container">
        <div className="Explorewidgets___input">
          <SearchIcon
            className="widgets__searchIcon"
            style={{ color: "#657786" }}
          />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <SettingsOutlinedIcno
          className="Explorewidgets__SettingsOutlinedIcno"
          style={{ color: "#657786" }}
        />
      </div>

      <Navitems />

      <NavExplore />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ConanOBrien"
        options={{ height: 400 }}
      />
    </div>
  );
}
