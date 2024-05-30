import React from 'react'
import Todo from './Todo'
import {nanoid} from 'nanoid'
import Nav from './Nav'

export default function App(){

    const [todo,setTodo] = React.useState([])
    const [currentValue,setCurrentValue] = React.useState('')

    React.useEffect(()=>{
        async function getAll(){
            const data = await JSON.parse(localStorage.getItem("todo"))
            if(data){
                setTodo(data)
            }
        }
        getAll()
    },[])

    React.useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(todo))
    },[todo])

    function handleChange(val){
        setCurrentValue(val)
    }

    function delTodo(id){
        const newTodo = todo.filter(item => item.id !== id ? item:0)
        setTodo(newTodo)
    }

    const elements = todo.map(todoElement=>{
        return <div className='todo_elements'><h3 className='todo-h'>{todoElement.title}</h3><a className='del-btn' onClick={()=>delTodo(todoElement.id)}><i class="fa-solid fa-trash"></i></a></div>
    })

    return(
        <div>
            <Nav/>
            <div className='container'>
                <div className='todo_form_div'>
                    <Todo handleChange={handleChange} current_value={currentValue} setTodo={setTodo} id={nanoid()}/>
                </div>
                <div className='todo-elements'>
                    {elements}
                </div>
            </div>
        </div>
    )
}