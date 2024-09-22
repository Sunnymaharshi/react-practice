import React from 'react'
import Parent from './Parent'
import SlowChild from './SlowChild'

const Performance = () => {
  return (
    <div>
        <h1>Performance</h1>
        <h2>1.Optimising using children prop or props</h2>
        {/* Rendering slow component inside Parent */}
        <Parent/>
        {/* Passing slow component to Parent as a prop */}
        {/* <Parent>
            <SlowChild/>
        </Parent> */}
    </div>
  )
}

export default Performance