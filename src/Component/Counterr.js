import React, { useState } from 'react'
import Button from "@mui/material/Button";

export default function Counterr() {
    const [count,setcount]=useState(0);
    function Incre() {
        setcount(count+1)
    }
    function Decre() {
        if(count<=0)
        {
            alert("Value less than 0")
            return
        }
        else{
            setcount(count-1)
        }
    }
  return (

       <>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          
          <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:"200px",width:"200px", backgroundColor:"#1976D2",color:'white' ,borderRadius:"20px"}}>{count}</h1>
          
          
       </div>

       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button variant="contained" onClick={Incre} style={{margin:"10px"}}>+</Button>
          <Button variant="contained" onClick={Decre}>-</Button>
       </div>
       </>
  ) 
}
