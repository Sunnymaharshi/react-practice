import React, { useState } from 'react'
import Tab from './Tab'
import TabContent from './TabContent'

const Tabs = () => {
    const [activeTab,setActiveTab] = useState(0)
    const [keyProp,setKeyProp] = useState(false)
    const handleClick = (idx)=>{
        setActiveTab(idx)
    }
  return (
    <div style={{
        background:"#f1f1f1",
        marginLeft:"50px",
        width:"max-content",
        padding:"20px"
    }}>
        <label htmlFor='key_prop'>Pass Key prop</label>
        <input id='key_prop' checked={keyProp} onChange={()=>setKeyProp(!keyProp)} type='checkbox'/>
        <br></br>
        <br></br>
        <div style={{
            display:'flex',
            gap:'30px'
        }}>
            {Array.from({length:4},(_,idx)=> <Tab key={idx} num={idx} handleClick={handleClick} activeTab={activeTab} />)}
        </div>
        {keyProp && <TabContent key={activeTab} activeTab={activeTab}/> }
        {!keyProp && <TabContent activeTab={activeTab}/>}
    </div>
  )
}

export default Tabs