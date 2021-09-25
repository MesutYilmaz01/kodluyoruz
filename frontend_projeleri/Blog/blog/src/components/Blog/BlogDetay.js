import React from 'react'
import { useParams } from 'react-router'
import { UseBlog } from '../../context/BlogContext'
import Footer from '../Footer'

function BlogDetay() {
    const {id} = useParams()
    const {blogs} = UseBlog()
    const blog = blogs.find(item => item.id == id)
    return (
        <>
        { blog ?         
        <div className="row p-5 border border-5 mt-5">
            <div className="row">
                <h3>{blog.title}</h3>
            </div>
            <div className="row mt-3">
                {blog.content}
            </div>
            <div className="row">
                {blog.content}
            </div>
            <div className="row">
                {blog.content}
            </div>
        </div>
        :
        <div className="row mt-5">Böyle bir blog bulunamadı...</div>
        }
        </>
    )
}

export default BlogDetay
