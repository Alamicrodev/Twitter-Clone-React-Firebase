import React, {useState, useEffect} from 'react'
import "./TweetBox.css"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from "./Firebase"
import { collection, addDoc } from "firebase/firestore"; 



function TweetBox({setPosts}) {
const [tweetMessage, setTweetMessage] = useState("")
const [tweetImage, setTweetImage] = useState("")
const sendTweet = (e) => {
  e.preventDefault(); 

  const addPost = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        displayName: 'Some Idiot',
        username: 'randomDude',
        verified: false, 
        text: tweetMessage,
        image: tweetImage, 
        avatar: "https://byuc.files.wordpress.com/2012/07/avat-2.jpg"
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  addPost().catch((e) => console.log(e))
  
  setPosts([])
  setTweetImage("")
  setTweetMessage("")

}

  return (
    <div className='tweetBox'>
        <form>
           <div className='tweetBox__input'>
            <Avatar src='https://byuc.files.wordpress.com/2012/07/avat-2.jpg'> </Avatar>
            <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type='text' />
            </div> 
            <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__imageInput' 
            placeholder="Optional: Enter image URL" type='text' />
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox