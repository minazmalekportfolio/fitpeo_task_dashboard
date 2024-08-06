import React from 'react'
import Logo from '../assets/images/logo.png';
import { BoxArrowRight, House } from 'react-bootstrap-icons';
import { GraphUp } from 'react-bootstrap-icons'
const Sidebar = () => {
  return (
    <div className='bg-darkgray sidebar d-flex flex-column align-items-center '>
{/* <img src={Logo} alt='' title='' className='logo'/> */}
<div className='sidebar-top-icons d-inline-flex flex-column align-items-center justify-content-between'>
    <span><House/></span>
    <span><GraphUp/> </span>
    <span><House/></span>
    <span><GraphUp/> </span>
</div>
<div className='font-white mt-auto logout-icon'>
    <BoxArrowRight/>
</div>
    </div>
  )
}

export default Sidebar