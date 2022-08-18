import React, {useState} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'

export default function Landing() {

    const [posts, setPosts] = useState(undefined)

    // const config = {
    //     secret : `EUaMcLnvOMuw46yum28ma_lsGkQMQg`,
    //     username : 'yruamazepol',
    //     password : 'Musica989898'
    // };

    let link = 'https://www.reddit.com/'

    const performCall = () =>{
        axios.get("https://www.reddit.com/r/aww/.json").then(
            (res)=>{setPosts(res)}
        )
    }

  return (
      <>
    <div>Landing
    <button onClick={()=>performCall()}>perform call</button>
    <MapThroughPosts  posts={posts}/>
    </div>
    </>
  )
}
