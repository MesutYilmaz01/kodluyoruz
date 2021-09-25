import React from 'react'
import {
  Link
} from "react-router-dom";


function Blog({blog}) {
    return (
        <div className="row border border-5 p-4 mt-3 mb-5">    
            <div className="col-md-9 offset-md-1">
                <div className="row">
                    <h4>{blog.title}</h4>
                </div>
                <div className="row">
                    {blog.content.substring(0, 318) + '...'}
                </div>
                <div className="d-flex justify-content-end">    
                    <div className="float-right">
                        <Link className="btn btn-primary" to={`/blog/${blog.id}`}>Devamını Oku</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
