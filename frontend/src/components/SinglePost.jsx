import { Link } from "react-router-dom"

const SinglePost = ({ post ,index }) => {
    return (
        <Link className=""  to={`/details/${index}`}>
            <img className="w-full max-h-[600px]" src={`http://localhost:7777/${post.image}`}></img>
            <h1>{post.title}</h1>
            <p className="w-full">{post.message}</p>
        </Link>
    )
}

export default SinglePost
