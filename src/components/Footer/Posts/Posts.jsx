import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineTable } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi'
import { FaIdBadge } from 'react-icons/fa'
import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'
function Posts() {

    const [data, setData] = useState([])
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(final => setData(final)
        )


    return (
        <Container className='post-container'>
            <div className="post-option">
                <button>
                    <AiOutlineTable/>POSTS
                </button>
                <button>
                    <BiMoviePlay />REELS
                </button>
                <button>
                    <FaIdBadge />TAGGED
                </button>
            </div>
            <div className="post-section">
                {data.map((item, index) => {
                    return (
                        <SinglePost url={item.thumbnailUrl} />
                    )
                })}

            </div>
        </Container>
    )

}
export default Posts