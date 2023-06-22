import React, {useState, useEffect} from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox.js"
import Post from "./Post.js"
import Widget from "./Widgets.js"
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore"; 
import FlipMove from 'react-flip-move'




function Feed() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const  {docs}  = await getDocs(collection(db, 'posts'));
       console.log(docs)
        setPosts(docs.map((elem) => ({...elem.data(), id: elem.id})))
        console.log(posts)
    }
    fetchData().catch(console.error)
  }, [posts])

  return (
    <div className='feed'>

        {/* Header */}
        <div className='feed__header'> 
        <h2>Home</h2>
        </div>

        {/* TweetBox */}
        <TweetBox setPosts={setPosts} /> 

        {/* Posts */}
        <FlipMove>
        { 
          posts.map(post => 

            <Post
              key={post.id} 
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image} /> 
          )
        }
        </FlipMove>

      

    </div>
  )
}

export default Feed