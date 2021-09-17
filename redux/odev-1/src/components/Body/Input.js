import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/notes/notesSlice'

function Input() {
    const dispatch = useDispatch()
    const add = (e) => {
        if (document.getElementById("textarea").value !== ''){    
            dispatch(addItem())
            document.getElementById("textarea").value = ''
        }
    }
    return (
        <>
            <button type="submit" className="btn btn-primary mb-2" onClick={add}>Ekle</button>
        </>
    )
}

export default Input
