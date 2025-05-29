import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    
  return (
    <div className=' d-flex justify-content-evenly mt-5' >
        <Link className='nav-link' to='/'>task 1</Link>
        <Link className='nav-link' to='/task2'> task 2</Link>
    </div>
  )
}

export default Navbar