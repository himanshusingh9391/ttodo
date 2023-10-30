import React,{useState} from 'react'

function Input({addTodo}) {
    const [input,setInput] = useState('')

    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     setInput("")
    // }

  return (
    <div className='body'>
    <div className='inn'>
      <h3>Todo List </h3>
        <input type='text' placeholder='Enter an item' onChange={(e)=>setInput(e.currentTarget.value)} value={input} className='input'/>
        <button onClick={()=>{
            addTodo(input) 
            setInput('')}} className='but'>Submit</button>
        {/* {input} */}
    </div>
    </div>
    
  )
}

export default Input