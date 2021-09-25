import React from 'react'
import { UseBlog } from '../../context/BlogContext'
import Blog from './Blog'

function Bloglar() {
    const {blogs, setBlogs} = UseBlog()
    return (
        <>    
            <div className="mb-5">
                {
                    blogs.map(item => (
                        <Blog blog={item}/>
                    ))
                }
            </div>
            <div className="border border-primary" style={{width:'100%', height:'50px', backgroundColor:'#0d6efd'}}>
        
            </div>
        </>
    )
}

export default Bloglar
