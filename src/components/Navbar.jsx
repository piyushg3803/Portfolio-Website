import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [clicked, setClicked] = useState(false)

  let toggleMenu = () =>{
    setClicked(!clicked)
  }

  return (
    <>

        {/* Laege view */}

        <div className='hidden md:flex justify-center text-l text-white font-medium xl:text-xl 2xl:text-3xl'>
            <h2 className='p-8 2xl:p-8 hover:text-gray-400'><a href="#">About Me</a></h2>
            <h2 className='p-8 2xl:p-8 hover:text-gray-400'><a href="#">Projects</a></h2>
            <h2 className='p-8 2xl:p-8 hover:text-gray-400'><a href="#">Skills</a></h2>
            <h2 className='p-8 2xl:p-8 hover:text-gray-400'><a href="#">Experience</a></h2>
            <h2 className='p-8 2xl:p-8 hover:text-gray-400'><a href="#">Contact</a></h2>

        </div>

        {/* Mobile view */}

        <FontAwesomeIcon icon={faBars} className='text-white text-3xl float-right m-5 md:hidden' onClick={toggleMenu}/>

        <div className={`${clicked ? "translate-x-0" : "translate-x-[-100%]"} absolute top-0 left-0 z-10 text-center text-white text-lg list-none bg-[#212130] w-[70%] h-screen overflow-hidden transition-transform duration-500 md:hidden`}>
            <li className='p-10 hover:bg-[#1a1924]'><a href="#" >About Me</a></li>
            <li className='p-10 hover:bg-[#1a1924]'><a href="#">Projects</a></li>
            <li className='p-10 hover:bg-[#1a1924]'><a href="#">Skills</a></li>
            <li className='p-10 hover:bg-[#1a1924]'><a href="#">Experience</a></li>
            <li className='p-10 hover:bg-[#1a1924]'><a href="#">Contact</a></li>
        </div>
    </>

)}

export default Navbar