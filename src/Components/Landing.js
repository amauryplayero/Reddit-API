import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import MapThroughPosts from './MapThroughPosts'
import { createConstructor } from 'typescript'
import HandleInfiniteLoop from './InfiniteLoop'

export default function Landing() {

    let loadingLogo
    const arrayWithNewPosts = useRef([])
    const countersForEffect = useRef(0)
    const [lastNameQuery, setLastNameQuery] = useState("")
    const page = useRef(0)
    
    const {
        posts,
        loading,
        error
        
    } = HandleInfiniteLoop(lastNameQuery)
    
    
    if(loading){
        loadingLogo = <>
        LOADING
        </>
    } else {
        loadingLogo = <>
        </>
    }

    HandleInfiniteLoop(lastNameQuery)

    useEffect(()=>{

    },[])
    

    const handleScroll = (e) =>{
        
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight
        // When user reaches bottom
        if(clientHeight + scrollTop >= scrollHeight && posts!=undefined){
            setLastNameQuery(posts[posts.length-1].data.name)
            }  
        }

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
