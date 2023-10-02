import React from 'react'
import { Link } from 'react-router-dom'

export const BlogList = ({ blogs, title , handleDelete}) => {
    // https://www.youtube.com/watch?v=gv9ugDJ1ynU&ab_channel=NetNinja
    return (
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
            {
                blogs.map((blog) => (

                    <div className="blog-preview" key={blog.id} >
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By: {blog.auther}</p>
                        {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                        </Link>
                        <br></br>
                      
                    </div>
                    
                ))};
        </div>
    )
}
