import React, { useReducer, useState } from 'react'


const initialState=[];

const reducer=(todos,action)=>
{
    switch(action.type)
    {
        case "add":
            {
                return[...todos,
                    {
                         id: Date.now(),
                         task:action.payload,
                         isCompleted:false

                
                    }
                   
                ]
            }
        case "update":
            {
               return  todos.map(todo=>(todo.id===action.payload.id)?{...todo,task:action.payload.task}:todo)
            }

        case "toggle":
            {
                return todos.map(todo=>(todo.id===action.payload)?{...todo,isCompleted:!todo.isCompleted}:todo)
            }
    }

}

const Todo = () => {

    const [todos,dispatch]=useReducer(initialState,reducer);
    const [activity,setActivity]=useState("");
    const [editingId,setEditingId]=useState(null);


   const handleSubmit=(e)=>
   {
    e.preventDefault();

    if(editingId===null)
    {
        if(activity.trim())
        {
            return;
        }
        dispatch({type:"add",payload:activity});
        setActivity("");
    }
    else
    {
       dispatch({type:"update",payload:{id:editingId,task:activity}});
       setEditingId(null)

    }
   }

   const handleEdit=(todo)=>
   {
      setActivity(todo.task);
      setEditingId(todo.id);
   }

   const handleToggle=(id)=>
   {
    dispatch({type:"toggle",payload:id})
   }


  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={activity}
        placeholder='Enter the activity'
        onChange={(e)=>setActivity(e.target.value)}
        />
        <button type='submit'>{(editingId ===null)?"Add":"Update"}</button>
        </form>

        <ul>
            {todos.map(todo=>
                {
                    <li key={todo.id}>
                        <span onClick={()=>handleToggle(todo.id)} style={{cursor:"pointer",
                                              textDecoration: todo.isCompleted ? 'line-through' : 'none',}}>
                                                {todo}
                                              </span>

                        
                        <button type='button' onClick={()=>handleEdit(todo)}>Edit</button>
                        
                    </li>
                }
            )}
        </ul>


    </div>
  )
}

export default Todo
