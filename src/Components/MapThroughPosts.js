import React from 'react'

export default function MapThroughPosts({posts}) {
   
   
    if(posts!=undefined){
        // console.log(posts.data.data.children)
        let postsArray = posts.data.data.children

        let mappedPosts = postsArray.map((e)=>{
            let singlePostData = e.data
            console.log(singlePostData)
            switch(singlePostData.post_hint) {
                // if post contains an image
                case "image":
                    return(
                        <>
                        <div className="postContainer">
                            <img width={"90px"} src={e.data.url}></img>
                         
                            {singlePostData.author}
                        <u>image</u>
                        </div>
                        </>
                       )
                break;
                case "video":
                return(
                    <>
                    <div className="postContainer">
                        <img width={"90px"} src={e.data.url}></img>
                        {singlePostData.author}
                        
                        <u>video</u>
                    </div>
                    </>
                )
                break;
                case "link":
                return(
                    <>
                    <div className="postContainer">
                        <img width={"90px"} src={e.data.thumbnail}></img>
                        {singlePostData.author}
                     
                        <u>link</u>
                    </div>

                    </>
                )
                break;
                case "hosted:video":
                 return(
                    <>
                    <div className="postContainer">
                        <img width={"90px"} src={e.data.thumbnail}></img>
                        {singlePostData.author}
                        
                    </div>

                    </>
                )
                break;
                default:
                    return(
                        <>
                        <div className="postContainer">
                            {/* <img width={"90px"} src={e.data.thumbnail}></img> */}
                            {singlePostData.author}//
                            {singlePostData.post_hint}
                          
                            
                        </div>
    
                        </>
                    )
                break;
                


            }
        })
        return (
            <>
          {/* <div>MapThroughPosts</div> */}
          {mappedPosts}
          </>
        )
    }

    return(
        <>
        'no posts'
        <img src={`https://external-preview.redd.it/Oj_yJrrdWIHHI3XBL6P9zaB_6wBbUUg9UFYvQP9raqI.jpg?auto=webp&amp;s=1b9779c375b6561908042c39980fc74601a72a32`}></img>
        </>
    )



}
