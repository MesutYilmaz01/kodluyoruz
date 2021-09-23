import React, { useEffect } from 'react'
import { UseNotes } from '../context/NotesContext'
import Note from './Note'
import {nanoid} from 'nanoid'

function Body() {
    const {counter, setCounter} = UseNotes()
    let local = {...localStorage}
    useEffect(() => {
        local = {...localStorage}
    },[counter])
    const notes = Object.entries(local)
    const addItem = () => {
        localStorage.setItem(nanoid(),","+new Date().toString())
        localStorage.setItem("counter",counter)
        setCounter(counter+1)
    }
    return (
        <>        
        <h1 className="header">Markdown Notes</h1>
        <div className="app">
            <div>
            <span className="icons">
                <i className="bi bi-plus-circle-fill" onClick={() => addItem()}></i>
            </span>
            {
                notes.filter(element => element[0] !== 'counter').map(item => (
                    <Note key={item[0]} note={item}/>)) 
            }
            </div>
        </div>
        </>
    )
}

export default Body
