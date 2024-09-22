import React from 'react'

const SlowChild = () => {

    const words = Array.from({length:300},(_,i)=> "Word")
    
  return (
    <div style={{padding:"0 30px"}}>

        <h2> Slow children component</h2>
        <div style={{
            display:'flex',
            flexWrap:'wrap',
        }}>
            {words.map((word,id)=><div key={id}>{id}</div>)}
        </div>
    </div>
  )
}

export default SlowChild