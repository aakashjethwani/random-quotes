import React, { useState } from 'react'
import './style.css'

export default function SplitRight(props) {
  
  const boxsize = props.clsName === 'right'?'split right right-mouse-hover':'split right left-mouse-hover'
  return (
    <div className={boxsize} onMouseEnter={()=> props.onEnter('right')}>
      <h1> This is right</h1>
      <a href='#' className='btn'>Click me</a>
    </div>
  )
}
