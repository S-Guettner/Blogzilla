const SinglePost = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.username}</p>
            <p>{post.email}</p>
            <p>{post.message}</p>
            <img style={{
                width: "100px"
            }} src={`http://localhost:7777/${post.image}`}></img>
        </div>
    )
}

export default SinglePost
