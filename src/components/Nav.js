import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navcontainer'>
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
