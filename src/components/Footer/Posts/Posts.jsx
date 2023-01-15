import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'
function Posts() {

    const [data, setData] = useState([])
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(final => setData(final)
        )


    return (
        <Container>
            <span className='post-option'>posts</span>
            <span>posts</span>
            <span>posts</span>

            <div className="post-section">
            
                {data.map((item, index) => {
                    return (
                        <SinglePost url={item.thumbnailUrl}/>
                    )
                 })}
            
            </div>
        </Container>
    )

}
                export default Posts