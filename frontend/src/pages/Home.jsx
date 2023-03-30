import { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SinglePost from '../components/SinglePost'
import { postData } from '../App'
import { v4 as uuidv4 } from 'uuid'


const Home = () => {

    const posts = useContext(postData)
    console.log(posts)


    if (!posts) return

    return (
        <div >
            <h1>HOMEEEEEEEEEE</h1>
        <Link to={'/admin'}>link to admin page</Link>
        {
        
        posts?.map((post,index) => {
            
            return (
            <SinglePost 
            key={uuidv4()}
            post={post} 
            index={index}
            />
            )
        })}

    </div>

    )
}

export default Home;