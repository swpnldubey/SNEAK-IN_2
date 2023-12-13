import React from 'react'
import  PostsData from '../postdata.js'
import Post from './Post'
import '../index.css'

const Posts = ({posts}) => {
  return (
    <div className="Posts">
        {PostsData.map((post, id)=>{ 
            return <Post data={post} id={id}/> 
            })}
    </div>
  )
}

// const Posts = ({ posts }) => {
//     return (
//         <div className="posts">
//             {posts && posts.map(post => (
//                 <Post
//                     key={post._id}
//                     id={post._id}
//                     username={post.username}
//                     userId={post.user}
//                     image={post.image}
//                     caption={post.caption}
//                 />
//             ))}
//         </div>
//     );
// };

export default Posts
