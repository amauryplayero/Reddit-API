import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'
import { createConstructor } from 'typescript'

export default function Landing() {

    const [posts, setPosts] = useState(undefined)
    const arrayWithNewPosts = useRef([])
    const countersForEffect = useRef(0)


    // console.log(loading)

    // let scrolled = false;
    let throttlePause;
 
    const throttle = (callback, time) => {
      //don't run the function if throttlePause is true
      if (throttlePause) return;
     
      //set throttlePause to true after the if condition. This allows the function to be run once
      throttlePause = true;
       
      //setTimeout runs the callback within the specified time
      setTimeout(() => {
          callback();
          
          //throttlePause is set to false once the function has been called, allowing the throttle function to loop
          throttlePause = false;
        }, time);
    };
    const performInitialCall = () =>{
        axios.get("https://www.reddit.com/r/aww/.json").then(
            (res)=>{setPosts(res.data.data.children)}
        )
    }
    console.log(countersForEffect.current)
    useEffect(()=>{
        if(countersForEffect.current<1){
            performInitialCall()
            countersForEffect.current++
        }
    },[])

    console.log(posts)
    const handleScroll = (e) =>{
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight
        
    
        if(clientHeight + scrollTop >= scrollHeight && posts!=undefined){
            console.log('bottom')
            // let lastNameQuery = posts[posts.length-1].data.name
            throttle(()=>{
                    // axios.get(`https://www.reddit.com/r/aww/.json?after=${lastNameQuery}`).then(
                    axios.get(`https://www.reddit.com/r/aww/.json`).then(
                        (res) => {
                            
                            // arrayWithNewPosts.current = [...posts, ...res.data.data.children]
                            // setPosts(arrayWithNewPosts.current)
                            setPosts(prevState=>([...posts, ...res.data.data.children]))
                        }
                    )
            }  
            ,4000)
        }  
    }
                
    window.addEventListener('scroll',(e)=>{handleScroll(e)})
  

    let link = 'https://www.reddit.com/'


   

  return (
      <>
     
    <button onClick={()=>performInitialCall()}>perform call</button>
    <div id="mainDiv" onScroll={e=>handleScroll(e)}>Landing
    <MapThroughPosts  posts={posts}/>
    </div>
    
    </>
  )
}
