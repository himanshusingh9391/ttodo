import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item({todos,deleteTodo,updateTodo}) {
  return (
    <div>
        <ul>
            {todos.map((item,index)=>{
                return(
                    <div key={index}>
                        <Card className='card' style={{alignContent:'center',display:'grid'}}>
                            <Card.Body>
                                <Card.Text className='text'>{item}</Card.Text>
                                <Button onClick={()=>deleteTodo(item)} className='bbbb'>Delete</Button>
                                <Button onClick={()=>updateTodo(item)} className='bb'>Update</Button>
                            </Card.Body>
                        </Card>
                        {/* <li>{item}</li> */}
                    </div>
                    
                )
            })}
        </ul>
    </div>
  )
}

export default Item