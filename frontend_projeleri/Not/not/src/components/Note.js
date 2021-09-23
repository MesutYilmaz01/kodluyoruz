import {useState} from 'react'
import { UseNotes } from '../context/NotesContext'

function Note(item) {
    const splitted = item.note[1].split(",")
    const {counter, setCounter} = UseNotes()
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [text, setText] = useState('')
    const blur = () => {
        setIsOnFocus(false)
        localStorage.setItem(item.note[0],text+","+new Date().toString())
    }
    const removeItem = () => {
        console.log(item.note[0], "siliniyor...")
        localStorage.removeItem(item.note[0])
        setCounter(counter+1)
    }
    return (
        <div className="note">
            <span className="date">
                {splitted[1]}
            </span>
            <span className="icons">
                {isOnFocus === false 
                ? <i className="bi bi-check-lg"></i> 
                : <i className="bi bi-pencil"></i>}
                <i className="bi bi-trash" onClick={() => removeItem()}></i>
            </span>
            <div>
                <textarea className="markdown-body"
                onFocus={() => setIsOnFocus(true)} 
                onBlur={() => blur()}
                defaultValue={splitted[0]}
                onChange={(e) => (setText(e.target.value))}>
                </textarea>
            </div>
            
        </div>
    )
}

export default Note
