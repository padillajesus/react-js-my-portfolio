import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

import {links} from '../constants'

// import {logo} from '../assets' 

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handletoggle = ()=> setToggle(!toggle);



    
return (
    <nav className='navbar'>
       <div className= {toggle?'navbar expand':'navbar'}>
            <Link to="/">
            <div className='logo'>
                {/* <img src={logo} alt='logo'/> */}
            </div>
            </Link>
            
                <div className='toggle-icon' onClick={handletoggle}>
                    {toggle?<Icon icon={x} size={45}/>:<Icon icon={menu} size={45}/>}
                </div>
                <div className='menu'>
                {
                        links.map((item) => (   
                            <div className='list-item'>
                                <ul>
                                    <li>
                                        <a href={`#${item.id}`}>{item.title}</a>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
    </div>
    </nav>
   
  )
}

export default Navbar
