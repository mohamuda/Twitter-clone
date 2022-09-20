import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';

export default function ListFeed() {

  return (

    <div className="feed">

        <div className="Lists__header">
            <ArrowBackIcon className='ArrowBackIcon__icont' />
            <div className="Lists__items">
                <h2>Lists</h2>
                <p>@mohamuda</p>
            </div>
            <PostAddOutlinedIcon className='PostAddOutlinedIcon__icont'style={{color: "#657786"}}/>
            <MoreHorizOutlinedIcon className='MoreHorizOutlinedIcon__icont' style={{color: "#657786"}}/>
        </div>
        <div className="List__container">
            <h2>
            Pinned Lists   
            </h2>
            <p>
            Nothing to see here yet — pin your favorite Lists to access them quickly.
            </p>
        </div>
        <div className="List__container--Discover">
            <h2>
            Discover new Lists  
            </h2>
        </div>
        <div className="List__discover">
          <div className="List__discover--img" >
          <SubjectOutlinedIcon />
          </div>
          <div className="List__discover--text">
            <h4>Smart Comedy</h4>
            <div className="list__user">
              {/*<img src={} />*/}
              <h4>J. KM</h4>
              <p>@Eponineq</p>
            </div>
          </div>
          <button className="List__discover--button">Follow</button>
        </div>
        <div className="List__discover">
          <div className="List__discover--img">
          <SubjectOutlinedIcon />
          </div>
          <div className="List__discover--text">
            <h4>Comedians</h4>
            <div className="list__user">
              {/*<img src={} />*/}
              <h4>Manu</h4>
              <p>@manuexpress</p>
            </div>
          </div>
          <button className="List__discover--button">Follow</button>
        </div>
        <div className="List__discover">
          <div className="List__discover--img">
          <SubjectOutlinedIcon />
          </div>
          <div className="List__discover--text">
            <h4>UX</h4>
            <div className="list__user">
              {/*<img src={} />*/}
              <h4>Alex Sandberg</h4>
              <p>@Alexiceberg</p>
            </div>
          </div>
          <button className="List__discover--button">Follow</button>
        </div>
        <div className="List__container--show">
          <p>
            Show more
          </p>
        </div>
        <div className="List__container--Your">
            <h2>
            Your Lists  
            </h2>
            <p>
            You haven't created or followed any Lists. When you do, they'll show up here.
            </p>
        </div>

    </div>

  )

}
