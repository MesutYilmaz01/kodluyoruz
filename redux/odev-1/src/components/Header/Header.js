import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/notes/notesSlice'


function Header() {
    const [txt, setTxt] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeFilter(txt))
    },[txt, dispatch])
    return (
        <div className="row">
            <div className="col-md-2 offset-md-5">    
                <h2>NotesApp</h2>
                <input className="form-control" 
                id="inp"
                placeholder="Search..."
                value={txt}
                onChange={(e) => setTxt(e.target.value)}/>
            </div>
        </div>
    )
}

export default Header
