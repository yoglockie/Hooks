import { useEffect, useState } from 'react';
import './App.css';
import UseEff from './Component/UseEff';

function App() {
    const [Data,SetData]=useState([])

    useEffect(()=>{
            const fetchdata = async()=>{
               try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/photos") 
                    if(!response.ok)
                    {
                      throw new Error("Network Response Failed")
                    }
                    const data = await response.json()
                   
                    SetData(data)
               } 
               catch (error) {
                    console.log("Error occured",error)
               }
            }
            fetchdata()
    },[])
  return (
      
   <div className='dabba'>
     {
      Data.map((item)=>{
        return <div className='loki' key={item.id}>
          <UseEff  title={item.title} url={item.url} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus ducimus eveniet debitis, ratione pariatur."/>
        </div>
      })
     }
   </div>
  )
   
}

export default App;

