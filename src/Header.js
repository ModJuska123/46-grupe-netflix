import React from 'react'
import logo from './logo.png';
import untitled from './untitled.png';

const Header = () => {
   return (

     <header className='header'>
        <img className='main-img' src="/" alt="main-img"></img>
        <div className='header-listing'>
          <img className='logo' src={logo} alt="Logo"></img>
          <div className='nav'>
            <input className='input'></input>
            <button className='btn'>Sign In</button>
          </div>
        </div>
    </header>
  )
}

export default Header