import React from 'react'

const SlowChild = () => {

    const words = Array.from({length:300},(_,i)=> "Word")
    
  return (
    <div style={{padding:"0 30px"}}>

        <h2> Slow children component</h2> 
        <p>(performs an expensive calculation or renders a huge List)</p>
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:"10px"
        }}>
            {words.map((word,id)=><div key={id}>{id}:{word}</div>)}
        </div>
    </div>
  )
}

export default SlowChild