import { useParams } from "react-router-dom";
import { useContext } from "react"
import { postData } from '../App'

const DetailsPage = () => {

    const posts = useContext(postData)
    
    console.log(posts && posts[0])
    const postIndex = parseInt(useParams().id)
    
    return ( 
        <div>
            {/* <img style={{width: "100px"}} src={''}></img> */}
            <h1>{posts && posts[postIndex].title}</h1>
            <p>{posts && posts[postIndex].message}</p>
        </div>
     );
}
 
export default DetailsPage;
