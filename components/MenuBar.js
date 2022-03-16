import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function MenuBar({ menubarToggle }) {
    return (
        <div className='min-h-[95vh] sm:min-h-[85vh] w-[92%] sm:w-[85%] flex justify-center items-center bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm relative'>
            {/* menu button */}
            <div className=' absolute top-2 right-7 w-full p-3 flex justify-end'>
                <div onClick={() => menubarToggle()} className=' cursor-pointer h-14 w-14 rounded-full bg-white bg-opacity-30 flex justify-center items-center hover:bg-pink-500 group transition-all ease-in-out duration-300'>
                    <AiOutlineClose className=' text-2xl text-pink-500 group-hover:text-white' />
                </div>
            </div>
            {/* menu button */}
            <div className=' w-full h-full flex justify-center items-center'>
                <ul className=''>
                    <li className=' text-center mb-5 sm:mb-10'>
                        <Link href="/">
                            <a className='menuItems'>Home</a>
                        </Link>
                    </li>
                    <li className=' text-center mb-5 sm:mb-10'>
                        <Link href="/about">
                            <a className='menuItems'>About Me</a>
                        </Link>
                    </li>
                    <li className=' text-center mb-5 sm:mb-10'>
                        <Link href="/works">
                            <a className='menuItems'>Works</a>
                        </Link>
                    </li>
                    <li className=' text-center mb-5 sm:mb-10'>
                        <Link href="/contract">
                            <a className='menuItems'>Contract Me</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar