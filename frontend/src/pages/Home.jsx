import { useContext } from 'react'

import SinglePost from '../components/SinglePost'
import { postData } from '../App'
import { v4 as uuidv4 } from 'uuid'


const Home = () => {

    const posts = useContext(postData)


    if (!posts) return

    return (
        <div >
            <h1>HELLLLO</h1>
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