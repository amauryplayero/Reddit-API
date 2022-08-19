import axios from 'axios'
import { useEffect, useState } from 'react'

export default function HandleInfiniteLoop(lastNameQuery) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])

  let cancel
  useEffect(()=>{
    setLoading(true)
    setError(false)
        axios({
        method: 'GET',
        url:`https://www.reddit.com/r/aww/.json?after=${lastNameQuery}`,
        cancelToken: new axios.CancelToken(c=> cancel = c)
        }).then(res => {
          setPosts(prevPosts=> ([...prevPosts, ...res.data.data.children]))
        }) 
    
    return () => cancel()
  
    },[lastNameQuery])
 


  return {loading, error, posts}
}
