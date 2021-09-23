import { createContext, useContext, useState } from "react";

const notesContext = createContext()

export const NotesProvider = ({children}) => {
    const [counter, setCounter] = useState(Number(localStorage.getItem("counter")))
    const values = {
        counter,
        setCounter
    }
    return <notesContext.Provider value={values}>{children}</notesContext.Provider>
}

export const UseNotes = () => useContext(notesContext)