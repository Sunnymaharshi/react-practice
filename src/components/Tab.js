import React from 'react'

const Tab = ({num,activeTab,handleClick}) => {
  return (
    <div style={{
        background: activeTab===num ? 'blue' : 'grey',
        padding:"10px",
        borderRadius:"20px",
        cursor:"pointer"
    }} onClick={()=>handleClick(num)}>
       Tab {num+1} 
    </div>
  )
}

export default Tab