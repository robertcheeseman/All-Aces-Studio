import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbackground'>
        <nav className='navbar'>
          <img src="./assets/marshall_head.jpg" alt="" />
            <div className='navcontainer'>
              <p>All Aces Studio</p>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Studio">Studio</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Discography">Discography</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
