import React from 'react'
import '../styles/round1.css'
import Backimg from '../assets/level/back.png';



function Round1() {
  return (
    <div className='level'>
      <img src={Backimg} alt='back' className='back-img' />
      <div className="levelPage">
        <h1 className="level-text">Round 01</h1>
        
      </div>
      
    </div>
  )
}

export default Round1