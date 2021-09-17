import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeText } from '../../redux/notes/notesSlice'

function Textarea() {
    const [inputText, setinputText] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeText(inputText))
    }, [inputText, dispatch])
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">    
                <textarea id="textarea" className="form-control" placeholder="Enter your text here" 
                rows="5" 
                value={inputText}
                onChange={(e) => setinputText(e.target.value)}>
                </textarea>
            </div>
        </div>
    )
}

export default Textarea
