'use client'
import React, { FC } from 'react'

const Test:FC = () => {
    const [count, setCount] = React.useState<number>(0);
    
    
    if(count < 0){
        throw new Error("Count cannot be negative");
    }
  return (
    <div className='flex justify-center flex-col'>
        <h1>Count: {count}</h1>
        <div className='w-96 flex justify-between items-center'>
        <button onClick={()=>{ setCount(count-1)}}>Drop</button>
        <button onClick={()=>{ setCount(count+1)}}>Add</button>
        </div>
        <button onClick={()=>{throw new Error("Event error")}}>Event Error</button>
    </div>
  )
}

export default Test