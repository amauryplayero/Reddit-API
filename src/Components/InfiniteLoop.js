import axios from 'axios'
import { useEffect, useState } from 'react'

export default function HandleInfiniteLoop(lastNameQuery) {
  const [loading, setLoading] = useState(false)
  const[error, setError] = useState(false)
  const [additionalPosts, setAdditionalPosts] = useState([])




  let cancel
  useEffect(()=>{
    setLoading(true)
    setError(false)
        axios({
        method: 'GET',
        url:`https://www.reddit.com/r/aww/.json?after=${lastNameQuery}`,
        cancelToken: new axios.CancelToken(c=> cancel = c)
        }).then(res => {
          setAdditionalPosts(prevAdditionalPosts=> ([...prevAdditionalPosts, ...res.data.data.children]))
          })
            //  setPosts(prevState=>([...posts, ...res.data.data.children]))   
    
    return () => cancel()
  
    },[lastNameQuery])
    // console.log(additionalPosts)

  return {loading, error, additionalPosts}
}
