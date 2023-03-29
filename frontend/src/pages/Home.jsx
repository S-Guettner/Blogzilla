import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SinglePost from '../components/SinglePost'



const Home = () => {

    const [posts, setPosts] = useState()
    
    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
        .then(res => res.json())
        .then(data => setPosts(data))
        },[])

    if (!posts) return

    return (
        <div className="App">
            <h1>HELLLLO</h1>
        <InputForm setPosts={setPosts} />
        {posts.map((post) => {
            return (
            <SinglePost post={post} />
            )
        })}

    </div>

    )}

export default Home;