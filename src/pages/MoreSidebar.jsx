import React from 'react'
import MoreOptions from '../Ui/MoreOptions';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';




export default function MoreSidebar() {

  return (

    <div className="MoreSidebar">

        {/*<TwitterIcon className="sidebar__twitterIcon" />*/}
        
            <MoreOptions Icon={PersonAddOutlinedIcon} text="Follower requests" /> 
            <MoreOptions Icon={SmsOutlinedIcon} text="Topics"  />
            <MoreOptions Icon={BoltOutlinedIcon} text="Moments" />
            <MoreOptions Icon={TwitterIcon} text="Twitter Blue" />
            <MoreOptions Icon={FeedOutlinedIcon} text="Newsletters" />
            <MoreOptions Icon={RocketLaunchOutlinedIcon} text="Twitter for professionals" />
            <MoreOptions Icon={CallMadeOutlinedIcon} text="Twitter Ads" />
            <MoreOptions Icon={EqualizerOutlinedIcon} text="Analytics" />
            <MoreOptions Icon={SettingsOutlinedIcon} text="Settings and privacy" />
            <MoreOptions Icon={HelpOutlineOutlinedIcon} text="Help Center" />
            <MoreOptions Icon={TvOutlinedIcon} text="Display" />
            <MoreOptions Icon={RunCircleOutlinedIcon} text="Keyboard shortcuts" />

    </div>

  )
}
