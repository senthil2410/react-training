import { createSlice } from "@reduxjs/toolkit";


const TodoSlice=createSlice(
    {
        name:"todos",
        initialState:[],
        reducers:{
            addTodo:(state,action)=>
            {
                state.push({
                    id:Date.now(),
                    activity:action.payload,
                    isCompleted:false
                })
            },
            updateTodo:(state,action)=>
            {
                ({
                    ...state,
                    activity:action.payload
                })
            },
            deleteTodo:(state,action)=>
            {
                return state.filter(todo=>todo.id!==action.payload)
            },

            toggleTodo:(state,action)=>
            {
               return state.map(todo=>todo.id===action.payload?({...todo,isCompleted:!todo.isCompleted}):todo)
            }
        }
        
    } 
)
 export const{addTodo,ToggleTodo,deleteTodo,UpdateTodo}=TodoSlice.actions;

 export default TodoSlice.reducer;


