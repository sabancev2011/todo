import { useState } from "react";

function Form({ onAddItem }) {
    
    let [text, setText] = useState('');

    return (
        <form className="form">
            <input placeholder="What needs to be done?" type="text" className="form__input" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={(e) => {
                e.preventDefault()
                text &&
                onAddItem(({
                id: new Date().toISOString(),
                text: text,
                isCompleted: false
            }))
            setText('')
            }} className="form__addTaskBtn button active">add Task</button>
        </form>
    )
}

export default Form;