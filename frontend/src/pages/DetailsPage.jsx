import { useParams } from "react-router-dom"
import { useContext } from "react"
import { postData } from '../App'
import { Link } from "react-router-dom"

const DetailsPage = () => {

    const posts = useContext(postData)

    const postIndex = (parseInt(useParams().id))

    
    return ( 
        <div>
            <img className="mx-auto  mb-2 max-h-[600px]" src={`http://localhost:7777/${posts && posts[postIndex].image}`}></img>
            <div>
            <h1 className=" text-4xl mb-8 text-white bg-black p-2">{posts && posts[postIndex].title}</h1>
            <p className="px-40 mb-52">{posts && posts[postIndex].message}</p>

            <Link className="border-2 p-2 rounded-md ml-4 hover:bg-neutral-500" to={'/'}>See all Blog Posts</Link>
            </div>
        </div>
     )
}
 
export default DetailsPage;
