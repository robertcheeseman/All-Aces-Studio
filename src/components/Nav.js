import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbackground'>
        <img src="/images/All-Aces-Body-Top.png" alt="" id='amphead'/>
        <div className='navlinks'>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Home" className='links'>Home</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Studio" className='links'>Studio</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/About" className='links'>About</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Services" className='links'>Services</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Discography" className='links'>Discography</Link>
            <img src="/images/knob1.png" alt="ampknob" />
            <Link to="/Contact" className='links'>Contact</Link>
        </div>
    </div>
  )
}
