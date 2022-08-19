import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'
import { createConstructor } from 'typescript'
import HandleInfiniteLoop from './InfiniteLoop'

export default function Landing() {

    const arrayWithNewPosts = useRef([])
    const countersForEffect = useRef(0)
    const [lastNameQuery, setLastNameQuery] = useState("")
    const page = useRef(0)

    const {
        posts,
        loading,
        error
    
    } = HandleInfiniteLoop(lastNameQuery)

    let loadingLogo

    HandleInfiniteLoop(lastNameQuery)

    useEffect(()=>{

    },[])
    



    const handleScroll = (e) =>{
        
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight
        // const observer = useRef
        // When user touches bottom
        
        
        if(clientHeight + scrollTop >= scrollHeight && posts!=undefined){
            // console.log('bottom')
            if(page<1){
            setLastNameQuery(posts[posts.length-1].data.name)
            }else{
                setLastNameQuery(posts[posts.length-1].data.name)
                // setPosts(additionalPosts)
                loadingLogo = <>
                </>
            }
                }  
            }
            
        if(loading){
            loadingLogo=<span>loading</span>
        }
            console.log(posts)
            
            // HandleInfiniteLoop(lastNameQuery)
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
