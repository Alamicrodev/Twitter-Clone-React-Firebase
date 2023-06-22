import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed, 
  TwitterShareButton, 
  TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
           <SearchIcon className="widgets__searchIcon"/> 
           <input type="text" placeholder='Search Twitter'/>
        </div>  
        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
           
           <TwitterTweetEmbed tweetId='1665850212517126147'/> 
           <TwitterTimelineEmbed 
            sourceType="profile"
            screenName= "alamicrodevcode" 
            options= {{height: 400}}
            /> 

            <TwitterShareButton url={"https://www.linkedin.com/in/alamicrodev/"} 
              options={{text: "#reactjs is awesome", via: "alamicrodev"}}/> 

        </div>

    </div>
  )
}

export default Widgets;