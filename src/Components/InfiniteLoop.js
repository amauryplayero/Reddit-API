import axios from 'axios'
import { useEffect, useState} from 'react'

export default function HandleInfiniteLoop(lastNameQuery) {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  let cancel 
  useEffect(()=>{
    setLoading(true)
  
        axios({
        method: 'GET',
        url:`https://www.reddit.com/r/aww/.json?after=${lastNameQuery}`,
        cancelToken: new axios.CancelToken(c=> cancel = c)
        }).then(res => {
          setPosts(prevPosts=> ([...prevPosts, ...res.data.data.children]))
          setLoading(false)
        }).catch(e => {
          if(axios.isCancel(e)) return
        })
    
    return () => cancel()
  
    },[lastNameQuery])
 
  return {loading, posts}
}
