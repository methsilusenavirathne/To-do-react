import React from 'react'

export default function Todo(props){
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(props.current_value){
            const todoVal = {
                id:props.id,
                title:props.current_value
            }
            props.setTodo(prev=>{
                return [todoVal,...prev]
            })
        }else{
            alert('Please enter a Todo...')
        }
        document.getElementById("todo").value = ""
    }

    return(
        <div>
            <form className='todo-form'>
                <input type="text" onChange={(event)=>props.handleChange(event.target.value)} id="todo"/>
                <button type="submit" className='todo_btn' onClick={event => handleSubmit(event)}>+</button>
            </form>
        </div>
    )
}