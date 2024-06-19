import React from 'react'
import '../styles/level01.css'
import Backimg from '../assets/level/back.png';



function Level1() {
  return (
    <div className='level'>
      <img src={Backimg} alt='back' className='back-img' />
      <div className="levelPage">
        <h1 className="level-text">LEVEL 01</h1>
        
      </div>
      
    </div>
  )
}

export default Level1


