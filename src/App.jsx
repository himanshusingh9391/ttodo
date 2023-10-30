
import './App.css'
import Input from './Components/Input'
import Item from './Components/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (newTodo) =>{
    setTodos([...todos,newTodo])
  } 

  const deleteTodo = (deleteItem)=>{
    const dTodo = todos.filter((item)=>item!=deleteItem)
    setTodos(dTodo)
  }
  
  // const updateTodo = (updateTodo)=>{
  //   const uTodo = todos
  //   setTodos(uTodo)
  // }

  return (
    <>
      <div>
        <Input addTodo={addTodo}/>
        <Item todos={todos} deleteTodo={deleteTodo} />
       </div>
    </>
  )
}

export default App
