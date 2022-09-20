import React from 'react'
import SettingsOutlinedIcno from '@mui/icons-material/SettingsOutlined';
import NotiImg from '../img/notificationimg.png'
import {TwitterTimelineEmbed} from "react-twitter-embed";

export default function NotificationFeed() {

  return (

    <div className="Noti--feed">

        <div className="Noti--feedheader">
            <h2>Notifications</h2>
            <SettingsOutlinedIcno className="Noti--feed__SettingsOutlinedIcnon" style={{color: "#657786"}}/>
        </div>
        <div className="Noti--list">
            <ul className="Noti--list__items">
                <li>All</li>
                <li>Mentions</li>
            </ul>
        </div>

        <div className="noti--content">
            <img src={NotiImg} />
            <div className="noti--content__info">
                <h2>Control which conversations you’re mentioned in</h2>
                <p>Use the action menu — those three little dots on a Tweet — to untag yourself and leave a conversation. <span className='noti--content__text'>Learn more</span></p>
            </div>
        </div>

        <TwitterTimelineEmbed
              sourceType="profile"
              screenName="pourmecoffee"
              options={{ height: 400 }}
            />


    </div>

  )

}

