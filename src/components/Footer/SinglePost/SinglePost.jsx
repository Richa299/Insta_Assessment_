import './SinglePost.css'
function SinglePost(prop){
    return(
        <div className="posts-details">
            <img src={prop.url}/>
        </div>
    )
}
export default SinglePost