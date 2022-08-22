import React, {useState} from 'react'
import MapThroughPosts from './MapThroughPosts'
import HandleInfiniteLoop from './InfiniteLoop'

export default function Landing() {

    let loadingLogo
    const [lastNameQuery, setLastNameQuery] = useState("")
    
    const {
        posts,
        loading,
        
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
    
    

    const handleScroll = (e) =>{
        
        const scrollHeight = e.target.scrollingElement.scrollHeight
        const scrollTop = e.target.scrollingElement.scrollTop
        const clientHeight = e.target.scrollingElement.clientHeight
        // When user reaches bottom
        const lastPostOnLastQuery = posts[posts.length-1]
        if(clientHeight + scrollTop >= scrollHeight && posts!==undefined && lastPostOnLastQuery!== undefined){
            setLastNameQuery(lastPostOnLastQuery.data.name)
        }
        
        }

        window.addEventListener('scroll',(e)=>{handleScroll(e)})
 
            
        return (
            <>
                <div id="mainDiv" onScroll={e=>handleScroll(e)}>
                    <MapThroughPosts  posts={posts}/>
                </div>
                {loadingLogo}
            </>
  )
}
