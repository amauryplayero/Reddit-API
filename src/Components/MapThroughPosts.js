import React , {useEffect}from 'react'
import {handleScroll} from './Landing'
import InfiniteLoop from './InfiniteLoop'


export default function MapThroughPosts({posts}) {

   


    // Map through the response of the GET requests. 
    if(posts!=undefined){
        let postsArray = posts
        let mappedPosts = postsArray.map((e)=>{
            let singlePostData = e.data
            let info = <>
                    <div className="picNameAndSubredditContainer">
                            <div className="thumbnailContainer">
                                <img width={"120px"} src={e.data.thumbnail}></img>
                            </div>

                            <span>{singlePostData.author}</span>
                                <a className="linkText"href={`https://www.reddit.com`+singlePostData.permalink} target="_blank">{singlePostData.title}</a>
                            <span className="subredditNameText">{singlePostData.subreddit_name_prefixed}</span>
                    </div>
                    </>

            switch(singlePostData.post_hint) {
                // if post contains an image
                case "image":
                    return(
                        <>
                        <div className="postContainer">
                            <div className="titleThumbnailNameContainer">
                                {info}
                            </div>

                        </div>
                        </>
                       )
                break;
                case "video":
                return(
                    <>
                    <div className="postContainer">
                        <div className="titleThumbnailNameContainer">
                                {info}
                        </div> 
                        <u>video</u>
                    </div>
                    </>
                )
                break;
                case "link":
                return(
                    <>
                    <div className="postContainer">
                      
                        <div className="titleThumbnailNameContainer">
                                {info}
                        </div>
                    </div>

                    </>
                )
                break;
                case "hosted:video":
                 return(
                    <>
                    <div className="postContainer">
                        <div className="titleThumbnailNameContainer">
                                {info}
                        </div>
                    </div>

                    </>
                )
                break;
                default:
                    return(
                        <>
                        <div className="postContainer">
                            {info}
                        </div>
    
                        </>
                    )
                break;
            }
        })
        return (
            <>
            <div>
          {mappedPosts}
          </div>
          </>
        )
    }

}
