import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbackground'>
        <img src="/images/All-Aces-Body-Top.png" alt="" id='amphead'/>
        <div className='navlinks'>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Home">Home</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Studio">Studio</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/About">About</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Services">Services</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Discography">Discography</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Contact">Contact</Link>
        </div>
    </div>
  )
}
