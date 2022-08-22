import React from 'react'

export default function MapThroughPosts({posts}) {

    if(posts===undefined) return
    // Map through the response of the GET requests. 
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

            return (<>
                    <div className="postContainer">
                            <div className="titleThumbnailNameContainer">
                                {info}
                            </div>
                     </div>
            </>)
        })
        return (
            <>
            <div>
          {mappedPosts}
          </div>
          </>
        )
    }


