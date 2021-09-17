import { createSlice, nanoid } from "@reduxjs/toolkit"

export const notesSlice = createSlice({
    name : 'notes',
    initialState : {
        items : [{                
            id : "1",
            note : "Not bir",
            color : "red",
        },
        {                
            id : "2",
            note : "Not iki",
            color : "blue",
        },
        {                
            id : "3",
            note : "Not bir",
            color : "green",
        },
        {                
            id : "4",
            note : "Not dört",
            color : "yellow",
        },],
        color : 'red',
        text : '',
        filterText : '',
    },
    reducers : {
        changeColor : (state, action) => {
            const color = action.payload
            state.color = color
        },
        changeText : (state, action) => {
            const text = action.payload
            state.text = text
        },
        addItem : (state) => {
            const object = {                
                id : nanoid(),
                color : state.color,
                note : state.text,
            }
            state.items.push(object)
        },
        changeFilter : (state, action) => {
            const text = action.payload
            state.filterText = text
        },
    }


})
export const filtered = (state) => {
    let list = state.notes.items.filter((item) =>  item.note.toLowerCase().includes(state.notes.filterText) === true)
    return list
}
export const {changeColor, changeText, addItem, changeFilter} = notesSlice.actions
export default notesSlice.reducer