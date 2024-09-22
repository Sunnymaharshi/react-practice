import React, {memo, useState } from 'react'
import SlowChild from './SlowChild'
const MemoSlowChild = memo(SlowChild);
const Parent = ({memo=false, children}) => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h2>Parent component</h2>
        <button onClick={()=>setCount((count)=>count+1)}>Update count: {count}</button>        
        {memo ? <MemoSlowChild /> : children ? children: <SlowChild />}   
          
    </div>
  )
}

export default Parent