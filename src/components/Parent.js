import React, {useState } from 'react'
import SlowChild from './SlowChild'

const Parent = ({children}) => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h2>Parent component</h2>
        <button onClick={()=>setCount((count)=>count+1)}>Update count: {count}</button>        
        {children? children: <SlowChild />}      
    </div>
  )
}

export default Parent