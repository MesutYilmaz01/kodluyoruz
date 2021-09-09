import { useState } from "react";

function Footer({todo, setTodo, number, setNumber, length}){

    const onClickLink = (e) => {
        if(e.target.name === "all"){
            setNumber(0)
        }
        else if(e.target.name === "active"){
            setNumber(1)
        }
        else{
            setNumber(2)
        }
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>0</strong>
                {length} items left
            </span>
            <ul className="filters">
                <li>
                    <a className={ number === 0 ? "selected" : ""} onClick={onClickLink} name="all">All</a>
                </li>
                <li>
                    <a className={ number === 1 ? "selected" : ""} onClick={onClickLink} name="active">Active</a>
                </li>
                <li>
                    <a className={ number ===2 ? "selected" : ""} onClick={onClickLink}  name="completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => setTodo([])}>
                Clear Completed
            </button>
        </footer>
    )
}

export default Footer