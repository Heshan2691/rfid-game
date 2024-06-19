import React from 'react'
import '../styles/start.css'
import gameLogo from '../assets/start/logo.png';


function Start() {
  return (
    <div className='start'>
      <img src={gameLogo} alt='logo' className='game-logo' />
      <div className="startPage">
        <h1 className="start-text">BABY DRIVER</h1>
        <button className="start-button">Start Game</button>
      </div>
      
    </div>
  )
}

export default Start