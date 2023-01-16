import './SinglePost.css'
function SinglePost(prop){
    return(
        <div className="posts-details">
            <img src={prop.url} className="post-image"/>
        </div>
    )
}
export default SinglePost