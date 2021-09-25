import React from 'react'
import { UseBlog } from '../context/BlogContext'
import Blog from './Blog/Blog'
import Bloglar from './Blog/Bloglar'
import Footer from './Footer'
import HakkimdaShort from './Hakkimda/HakkimdaShort'


function Anasayfa() {
    const {hakkimda, setHakkimda} = UseBlog()
    const {blogs, setBlogs} = UseBlog()   
    let temp = []
    for(let i =0; i<3; i++)
    {
        temp.push(blogs[i])
    }
    return (
        <>
        <div>
            <HakkimdaShort/>
            <div className="row text-center mt-5">
                <h3>BLOGLARIM</h3>
            </div>
            <div className="mb-5">
                {temp.map(item => (
                    <Blog blog={item}/>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Anasayfa
