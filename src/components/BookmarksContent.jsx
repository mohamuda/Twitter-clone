import React from 'react'
import Bookmarkimg from '../img/bookmarkimg.png'

export default function BookmarksContent() {

  return (

    <div className='feed'>

        <div className="Bookmarkheader__header">
            <h2>Bookmarks</h2>
            <p>@mohamuda</p>
        </div>

        <div className="bookmarks__container">

            <div className="bookmarks__elements">

                <img src={Bookmarkimg} />
                <h2>Save Tweets for later</h2>
                <p>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>

            </div>

        </div>

    </div>

  )

}
