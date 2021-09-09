import { useState, useEffect } from "react";

function List({todo, setTodo, number, setLength}){
    const [task, setTask] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault()
        setTodo([...todo, {text:task, done:false}])
    }

    useEffect(() => {
        setTask("")
    }, [todo])

    let temp = [];
    if(number === 0){
        temp = todo
    }else if(number === 1){
        temp = todo.filter((item) => !item.done)
    }
    else{
        temp = todo.filter((item) => item.done)
    }
    setLength(temp.length)
    
    const f = (item) => {
        //console.log(item)
        let searched = todo.filter((element) => (element.text === item.text))
        searched[0].done = !searched[0].done
        setTodo([...todo])
    }

    return (
            <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onFormSubmit}>                    
                    <div>
                        <input className="new-todo" placeholder="What needs to be done?" value={task} onChange={(e) => (setTask(e.target.value))}/>
                    </div>
                </form>
            </header>
            
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all"
                    >Mark all as complete
                </label>

            <ul className="todo-list">
                {temp.map((item, i) => (
                    <li key={i} className={item.done ? "completed" : ""}>
                        <div className="view">
                            <input className="toggle" type="checkbox" defaultChecked={item.done ? "checked" : ""} onClick={() => (f(item))}/>
                            <label>{item.text}</label>
                            <button className="destroy" onClick={() => (setTodo(todo.filter((element) => element.text !== item.text)))}></button>
                        </div>
                    </li>
                ))}
            </ul>
            </section>
            </div>
    )
}

export default List