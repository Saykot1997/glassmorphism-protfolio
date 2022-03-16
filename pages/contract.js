import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import MenuBar from '../components/MenuBar'
import photo from "../images/Saykot.jpg";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GrFacebookOption } from 'react-icons/gr'
import { ImLinkedin2 } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export default function contract() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    const menubarToggle = () => {

        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className=" relative min-h-screen w-full py-5 sm:py-10 flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
            {/* animations div */}
            <div className="absolute h-full w-full top-0 left-0">
                <div className=" absolute top-28 left-44 sm:w-16 sm:h-16 rounded-full bg-purple-500 animate-zoom"></div>
                <div className=" absolute bottom-28 left-28 sm:w-16 sm:h-16 rounded-full bg-yellow-500"></div>
                <div className=" absolute bottom-48 right-20 w-0 sm:w-32 h-0 sm:h-32 rounded-full bg-white animate-rotated"></div>
            </div>
            {
                isMenuOpen ?
                    <MenuBar menubarToggle={menubarToggle} />
                    :

                    <div className='min-h-[95vh] sm:min-h-[85vh] w-[92%] sm:w-[85%] px-5 sm:px-10 py-5 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm'>

                        {/* menu button */}
                        <div className=' w-full flex justify-end'>
                            <div onClick={menubarToggle} className=' cursor-pointer h-10 sm:h-14 w-10 sm:w-14 rounded-full bg-white bg-opacity-30 flex justify-center items-center hover:bg-pink-500 transition-all duration-300 ease-in-out group'>
                                <GoThreeBars className=' text-2xl text-pink-500 group-hover:text-white' />
                            </div>
                        </div>
                        {/* menu button */}

                        <div className=' w-full'>
                            <h4 className=' text-center text-lg sm:text-3xl md:text-4xl font-semibold py-2 sm:py-5 md:py-10'>Contract Me</h4>
                            <div className='flex items-center flex-wrap'>
                                <div className=' sm:w-[50%] w-[100%] flex justify-center'>
                                    <div className='sm:w-[85%] md:w-[70%] lg:w-[50%]'>
                                        <Image
                                            src={photo}
                                            alt="Picture of the author"
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>
                                </div>
                                <div className=' w-[100%] sm:w-[50%]'>
                                    <div className=' mb-2'>
                                        <p className=' text-lg text-gray-700 font-semibold'>Email :</p>
                                        <p className=' text-gray-600 mt-2'>saykothossain14@gmail.com</p>
                                    </div>
                                    <div className=' mb-2'>
                                        <p className=' text-lg text-gray-700 font-semibold'>Phone Number :</p>
                                        <p className=' text-gray-600 mt-2'>+8801838652572</p>
                                    </div>
                                    <div>
                                        <p className=' text-lg text-gray-700 font-semibold'>Follow Me :</p>
                                        <div className=' flex mt-1'>
                                            <div className='linkItems group ml-0'>
                                                <a href="https://www.facebook.com/saykot.hossain.1/" target="_blank" rel="noopener noreferrer">
                                                    <GrFacebookOption className='contactIcon group-hover:text-white' />
                                                </a>
                                            </div>
                                            <div className='linkItems group'>
                                                <a href="https://github.com/Saykot1997" target="_blank" rel="noopener noreferrer">
                                                    <AiOutlineGithub className='contactIcon group-hover:text-white' />
                                                </a>
                                            </div>
                                            <div className='linkItems group'>
                                                <a href="https://www.linkedin.com/in/shohel-mia-6b31b9216/" target="_blank" rel="noopener noreferrer">
                                                    <ImLinkedin2 className='contactIcon group-hover:text-white' />
                                                </a>
                                            </div>
                                            <div className='linkItems group'>
                                                <a href="https://wa.me/+8801838652572" target="_blank" rel="noopener noreferrer">
                                                    <BsWhatsapp className='contactIcon group-hover:text-white' />
                                                </a>
                                            </div>
                                            <div className='linkItems group'>
                                                <a href="mailto: saykothossain14@gmail.com" target="_blank" rel="noopener noreferrer">
                                                    <SiGmail className='contactIcon group-hover:text-white' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
