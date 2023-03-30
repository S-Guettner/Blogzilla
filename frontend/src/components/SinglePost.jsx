import { Link } from "react-router-dom"

const SinglePost = ({ post ,index }) => {
    return (
        <Link to={`/details/${index}`}>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
            <img style={{
                width: "100px"
            }} src={`http://localhost:7777/${post.image}`}></img>
        </Link>
    )
}

export default SinglePost
