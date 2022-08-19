import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'
import { createConstructor } from 'typescript'
import InfiniteLoop from './InfiniteLoop'

export default function Landing() {

    const [posts, setPosts] = useState(undefined)
    const arrayWithNewPosts = useRef([])
    const countersForEffect = useRef(0)
    const loading = useRef(false)
  

    let loadingLogo
 

    const performInitialCall = () =>{
        axios.get("https://www.reddit.com/r/aww/.json").then(
            (res)=>{setPosts(res.data.data.children)}
        )
    }
    function isScrolling(e){
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight
        const innerHeight = e.target.scrollingElement.innerHeight
        const offsetHeight = e.target.scrollingElement.offsetHeight



        if(innerHeight + scrollTop!==offsetHeight){
          return;
        }
        else {
          console.log("scrolling down");
        }
    }
    // Make initial API calls
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
        
        // When user touches bottom
        loading.current=true
        
        if(clientHeight + scrollTop >= scrollHeight && posts!=undefined){
            console.log('bottom')
            let lastNameQuery = posts[posts.length-1].data.name

            if(loading.current===true){
           
                axios.get(`https://www.reddit.com/r/aww/.json?after=${lastNameQuery}`).then(
                    (res) => {
                        
                        setPosts(prevState=>([...prevState, ...res.data.data.children]))
                        loading.current= false
                        
                    }
                    )
         
                }

        }  
    }
                
  
  

    let link = 'https://www.reddit.com/'
window.addEventListener('scroll',(e)=>{handleScroll(e)})

   

  return (
    <>
    {/* <button onClick={()=>{performInitialCall()}}></button> */}
    <div id="mainDiv" onScroll={e=>handleScroll(e)}>
        <MapThroughPosts  posts={posts}/>
    </div>
    {loadingLogo}
    </>
  )
}
