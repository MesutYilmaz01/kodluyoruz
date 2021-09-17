import React from 'react'

function Note(item) {
    return (
        <div className="col-md-3 mt-3 border" style={{background:[item.note.color], maxHeight:'300px', overflow:'auto'}}>
            <h2>Note</h2>
            {item.note.note}
        </div>
    )
}

export default Note
