import React from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../../redux/notes/notesSlice'

function Colors({color}){
    const dispatch = useDispatch()
    return (
        <div className="col-md-2 rounded-circle"
        style={{ background:[color], width:'25px', height:'25px'}}
        onClick={(e) => dispatch(changeColor(color))}>
        </div>
    )
}

export default Colors
