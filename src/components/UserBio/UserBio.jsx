import { useState } from "react"
import { Container } from "react-bootstrap"
import './UserBio.css'
import blue from '../../blue.jpg'
import profile from '../../profile.png'
function UserBio(){

    const [repeat,setRepeat]=useState(false);
    const [user,setUser]=useState([]);
    if(!repeat){
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.json())
    .then(data=>setUser(data))
    setRepeat(true)
    }

    return(
        <Container className="user-section">
           <div className="left-part">
            <img src={profile} alt="profile"/>
           </div>
           <div className="right-part">
           <p className="name">{user.name} 
           <span><img src={blue}/></span>
           </p>
           <button className="follow">Follow</button>
           <button className="msg">Message</button>
           <span className="dots">...</span>
           <p className="posts"><span>1,499</span>posts</p>
           <p className="followers"><span>231M</span>followers</p>
           <p className="following"><span>231</span>following</p>
           <p></p>
           <p><span>{user.username}</span>
           <span>{user.website}</span>
           {/* <span>{user.company.name}</span> */}
           </p>
           </div>
        </Container>
    )
}
export default UserBio