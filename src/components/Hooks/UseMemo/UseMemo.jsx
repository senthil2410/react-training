import React, { useMemo, useState } from "react";

const CalculateBonus=React.memo(({role,salary})=>
{

     const bonus=useMemo(()=>
    {
       console.log("Memo runs");

        if(role==="Manager")
        {
            return salary*7/100;
        }
        else if(role==="Senior")
        {
            return salary*5/100
        }
        else{
            return salary*2/100;
        }


    },[role,salary]);


    return(
        <div>
            <h3>Role: {role}</h3>
            <p>Salary: {salary}</p>
            <p>Bonus :{bonus}</p>
        </div>
    );
})


const UseMemo=()=>
{
        const [role,setRole]=useState("Manager");
        const [salary,setSalary]=useState(100);
        const [showBonus, setShowBonus] = useState(false);
        const [inputValue, setInputValue] = useState("0");
   
        const handleBonus=()=>
        {
            setShowBonus(true);
        }

        const handleInputChange = (e) => {
            setInputValue(e.target.value);  
        };

        const handleInputBlur = () => {
            setSalary(Number(inputValue));  
        };
  
   return(
    <div>
       <input type="number" 
       placeholder="Enter the salary" 
       name="salary"
       value={salary} 
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        />

       <select value={role}  name="role" onChange={(e)=>setRole(e.target.value)}>
        <option value="Manager">Manager</option>
        <option value="Senior">Senior</option>
        <option value="Junior" >Junior</option>
       </select>

      <button type="button" onClick={handleBonus}>Bonus</button>
       {showBonus && <CalculateBonus salary={salary} role={role} />}
    </div>
   );
}

export default UseMemo;