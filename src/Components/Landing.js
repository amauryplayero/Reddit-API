import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'

export default function Landing() {

    const [posts, setPosts] = useState(undefined)

    // const config = {
    //     secret : `EUaMcLnvOMuw46yum28ma_lsGkQMQg`,
    //     username : 'yruamazepol',
    //     password : 'Musica989898'
    // };

    const handleScroll = (e) =>{
        // console.log(e.target.scrollingElement.scrollHeight)
        // console.log(e)
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight

        if(clientHeight + scrollTop === scrollHeight){
            console.log('reached bottom')
        }
        // const bottom = e.target.scrollingElement.scrollHeight - 
        

        
    }

    window.addEventListener('scroll',(e)=>{handleScroll(e)})
    // useEffect(()=>{
    // },[])

    let link = 'https://www.reddit.com/'

    const performCall = () =>{
        axios.get("https://www.reddit.com/r/aww/.json").then(
            (res)=>{setPosts(res)}
        )
    }

   

  return (
      <>
     
    <button onClick={()=>performCall()}>perform call</button>
    <div id="mainDiv" onScroll={e=>handleScroll(e)}>Landing
    <MapThroughPosts  posts={posts}/>
    </div>
    
    </>
  )
}
