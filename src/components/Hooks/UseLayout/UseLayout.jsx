import React, { useLayoutEffect, useRef, useState } from "react";

const students=[
    "Senthil",
    "Kumar",
    "Thangaraj",
    "Aswanth",
    "Jaikanth",
    "Thainesh"
]

const UseLayoutEffect=()=>
{
     const[message,setMessage]=useState(students.slice(0,3));
     const [index,setIndex]=useState(3)
     const inputref=useRef();

    useLayoutEffect(()=>
    {
        const element=inputref.current;
        if(element)
        {
            element.scrollTop=element.scrollHeight;
        }
       
    },[message])

   const handleMessage=()=>
   {
    
      const nextIndex=(index+1);

       if(index<=nextIndex)
       {
         setMessage(students.slice(0,nextIndex));
         setIndex(nextIndex)
       }

   }

    return(
        <div>

            <div
              ref={inputref}
              style={{
                height:"80px",
                width:"60%",
                overflowY:"auto",
                margin:"20px",
                padding:"10px"
              }}
            >
            <ul>
            {message &&
              message.map((data,index)=>
              (
                <li key={index}>{data}</li>
              )
              )
            }
            </ul>    
            </div>

            <button onClick={handleMessage}>More messages</button>

        </div>
    )
};

export default UseLayoutEffect;