import React from 'react'
import logo from './logo.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'mediumblue',
    color: '#fff'
  }
   return (
    <header className='header'>
      <img className='logo' src={logo} alt="Logo"></img>
      <div className='nav'>
        <input className='input'></input>
        <button className='btn'>Sign In</button>
      </div>
    </header>
  )
}

export default Header