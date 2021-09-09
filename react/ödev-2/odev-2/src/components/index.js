import { useState } from "react";
import Footer from "./footer"
import List from "./list"
import "./styles.css"

const todos = [
    {
        "done": true,
        "text": "Taste JavaScript"
    },
    {
        "text": "Code furiously",
        "done": true
    },
    {
        "text": "Promote Mavo",
        "done": false
    },
    {
        "text": "Give talks",
        "done": false
    },
    {
        "text": "Write tutorials",
        "done": true
    },
    {
        "text": "Have a life!",
        "done": false
    }
]

function ToDo(){
    const [todo,setTodo] = useState(todos)
    const [number, setNumber] = useState(0)
    const [length, setLength] = useState(0)
    return (
        <>
        <section className="todoapp">
            <List todo={todo} setTodo={setTodo} number={number} setLength={setLength}/>
            <Footer todo={todo} setTodo={setTodo} number={number} setNumber={setNumber} length={length}/>
        </section>
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by</p>
            <p>Part of</p>
        </footer>
        </>
    )
}

export default ToDo