import React from 'react'
import Note from './Note'
import { useSelector } from 'react-redux'
import { filtered } from '../../redux/notes/notesSlice'

function List() {
    const notes = useSelector(filtered)
    return (
        <div className="row">
            <div className="col mt-3">
                <div className="row">
                    {
                        notes.map(item => (
                            <Note  key={item.id} note={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default List
