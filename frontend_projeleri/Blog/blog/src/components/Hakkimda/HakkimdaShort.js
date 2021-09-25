import React from 'react'
import { UseBlog } from '../../context/BlogContext'


function HakkimdaShort() {
  const {hakkimda, setHakkimda} = UseBlog()
    return (
      <div style={{borderBottom:'5px solid black'}}>
          <div className="row mt-4">
            <div className="col offset-md-5">
              <h3>{hakkimda.title}</h3>
            </div>
          </div>
          <div className="row mt-2 mb-5">
            <div className="col-3 offset-md-2">
              <img src={hakkimda.img} alt="image" width="220" className="rounded-circle"/>
            </div>
            <div className="col-md-6">
                <div className="mt-4">{hakkimda.content}</div>
            </div>
          </div>
      </div>
    )
}

export default HakkimdaShort
