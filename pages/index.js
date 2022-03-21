import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import photo from "../images/Saykot.jpg"
import Image from 'next/image'
import MenuBar from '../components/MenuBar'
import Link from 'next/link'

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menubarToggle = () => {

    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
      {/* animations div */}
      <div className="absolute h-full w-full top-0 left-0">
        <div className=" fixed top-28 left-44 w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-purple-500 animate-zoom"></div>
        <div className=" fixed bottom-28 left-28 w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-yellow-500"></div>
        <div className=" fixed bottom-48 right-20 sm:w-32 w-0 sm:h-32 h-0 rounded-full bg-white animate-rotated"></div>
        <div className=" fixed top-[300px] left-[500px] sm:w-16 w-0 sm:h-16 h-0 rounded-full bg-pink-500 sm:animate-updown"></div>
      </div>
      {
        isMenuOpen ?
          <MenuBar menubarToggle={menubarToggle} HomePage />
          :
          <div className='sm:h-[85vh] h-[95vh] w-[92%] sm:w-[85%] bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm relative'>
            {/* menu button */}
            <div className='absolute top-2 right-7 w-full p-3 flex justify-end'>

              <div onClick={menubarToggle} className=' cursor-pointer h-14 w-14 rounded-full bg-white bg-opacity-30 flex justify-center items-center hover:bg-pink-500 group'>
                <GoThreeBars className=' text-2xl text-pink-500 group-hover:text-white' />
              </div>

            </div>
            {/* menu button end */}
            <div className=' w-full h-full flex-wrap flex sm:items-center sm:justify-between px-5 pt-10 sm:p-10'>
              <div className=' sm:w-1/2 w-full order-2 sm:order-1 sm:pl-12 text-center sm:mt-0 mt-5'>
                <p className=' text-gray-800 text-lg'>Hello, I am</p>
                <p className=' sm:text-4xl text-2xl my-3 font-semibold text-gray-800'>Shohel Mia</p>
                <p className=' text-gray-700 sm:text-xl text-lg'>Full Stack Web Developer</p>
                <div className=' mt-5'>
                  <Link href="/about">
                    <a>
                      <button className='commonbutton'>More About Me</button>
                    </a>
                  </Link>
                  <Link href="/works">
                    <a>
                      <button className=' commonbutton mt-4'>Works</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className=' sm:w-1/2 w-full order-1 sm:order-2 text-center flex justify-center items-center'>
                <div className=' h-48 w-48 sm:h-52 sm:w-52 md:h-80 md:w-80 border-4 border-white rounded-full overflow-hidden'>
                  <Image
                    src={photo}
                    alt="Picture of the author"
                    className=' rounded-full w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
      }

    </div>
  )
}
