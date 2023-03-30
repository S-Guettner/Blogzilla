import { useEffect, useState, useContext} from 'react'
import InputForm from '../components/InputForm'
import SinglePost from '../components/SinglePost'
import { postData } from '../App'
import { v4 as uuidv4 } from 'uuid'

import dataContext from './AdminPage'

const Home = () => {

    const posts = useContext(postData)
   
/*     const [posts, setPosts] = useState()
    
    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
        .then(res => res.json())
        .then(data => setPosts(data))
        },[])
 */
    if (!posts) return

    return (
        <div >
            <h1>HELLLLO</h1>
        {/* <InputForm setPosts={setPosts} /> */}
        {posts.map((post) => {
            return (
            <SinglePost 
            key={uuidv4()}
            post={post} />
            )
        })}

    </div>

    )
}

export default Home;