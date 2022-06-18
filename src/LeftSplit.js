import React, { useState } from 'react'
import './style.css'

export default function LeftSplit(props) {
  
  const boxsize = props.clsName === 'left'?'split left left-mouse-hover':' split left right-mouse-hover'
  return (
    <div className={boxsize} onMouseEnter={()=> props.onEnter('left')}>
        <h1>Play Station 5</h1>
        <button className='btn'>Buy Now</button>
    </div>
  )
}
