import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPost=createAsyncThunk("/fetch/postdata",async(_ ,rejectWithValue)=>
{
   try
   {
    const response=axios.get("http://localhost:4000");
    return response.data
   }
   catch(err)
   {
    console.error("There is an error",err);
    rejectWithValue(err);
   }
})

const PostSlice=createSlice(
    {
        name:"posts",
        initialState:{
            loading:false,
            data:[],
            error:null
        },
        reducers:{},
        extraReducers:(builder)=>
        {
            builder.addCase(fetchPost.pending,(state)=>
            {
                state.loading=true;
                state.error=null;
            }),
            builder.addCase(fetchPost.fulfilled,(state,action)=>
            {
                state.loading=false;
                state.data=action.payload
            })
        }
    }
)



