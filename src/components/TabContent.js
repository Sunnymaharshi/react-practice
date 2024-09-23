import React, { useState } from 'react'

const TabContent = ({activeTab}) => {
    const [feedback,setFeedback] = useState("");
  return (
    <div style={{padding:"10px"}}>
        <div>Feedback for tab {activeTab+1}</div>
        <input type='text' placeholder='write your feedback' style={{height:"60px"}} value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
        <br></br>
        <button>Submit</button>
    </div>
  )
}

export default TabContent