import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import MenuBar from '../../components/MenuBar'
import Link from 'next/link'
import photo1 from "../../images/work1.png"
import photo2 from "../../images/work2.png"
import photo3 from "../../images/work3.png"
import photo4 from "../../images/work4.png"
import photo5 from "../../images/work5.png"
import photo6 from "../../images/work6.png"
import photo7 from "../../images/work7.png"
import photo8 from "../../images/work8.png"
import photo9 from "../../images/work9.png"
import photo10 from "../../images/work10.png"
import photo11 from "../../images/work11.png"
import photo12 from "../../images/work12.png"
import Image from 'next/image'


export default function Works() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menubarToggle = () => {

        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className=" relative min-h-screen w-full py-5 sm:py-16 flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
            {/* animations div */}
            <div className="absolute h-full w-full top-0 left-0">
                <div className=" fixed top-28 left-44 sm:w-16 sm:h-16 rounded-full bg-purple-500 animate-zoom"></div>
                <div className=" fixed bottom-28 left-28 sm:w-16 sm:h-16 rounded-full bg-yellow-500"></div>
                <div className=" fixed bottom-48 right-20 w-0 sm:w-32 h-0 sm:h-32 rounded-full bg-white animate-rotated"></div>
                <div className=" fixed top-[300px] left-[500px] w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-pink-500 animate-updown"></div>
            </div>
            {
                isMenuOpen ?
                    <MenuBar menubarToggle={menubarToggle} WorkPage />
                    :

                    <div className='min-h-[95vh] sm:min-h-[85vh] w-[92%] sm:w-[85%] px-5 sm:px-10 py-5 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm'>

                        {/* menu button */}
                        <div className=' w-full flex justify-end'>
                            <div onClick={menubarToggle} className=' cursor-pointer h-10 sm:h-14 w-10 sm:w-14 rounded-full bg-white bg-opacity-30 flex justify-center items-center hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out group'>
                                <GoThreeBars className=' text-2xl text-pink-500 group-hover:text-white' />
                            </div>
                        </div>
                        {/* menu button */}

                        <div className=' w-full'>
                            <h4 className=' text-center text-lg sm:text-3xl md:text-4xl font-semibold'>Recent Works</h4>
                            <p className=' text-lg sm:text-xl font-semibold mt-5'>Full Stack Websites : </p>
                            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/facebookClone">
                                            <a>
                                                <Image
                                                    src={photo3}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Social App Website</p>
                                    <Link href="/works/facebookClone">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/flipkart">
                                            <a>
                                                <Image
                                                    src={photo2}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>E-commerce Website</p>
                                    <Link href="/works/flipkart">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems  group'>
                                        <Link href="/works/flipkartAdmin">
                                            <a>
                                                <Image
                                                    src={photo12}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>E-commerce Website Addmin Dashboard</p>
                                    <Link href="/works/flipkartAdmin">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/blog">
                                            <a>
                                                <Image
                                                    src={photo1}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Blog Website</p>
                                    <Link href="/works/blog">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/agentList">
                                            <a>
                                                <Image
                                                    src={photo10}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Agent List website</p>
                                    <Link href="/works/agentList">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}
                            </div>


                            {/* frontend websites */}
                            <p className=' text-lg sm:text-xl font-semibold mt-10 mb-5'>Frontend or Static Websites : </p>
                            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/reactRwebsite">
                                            <a>
                                                <Image
                                                    src={photo11}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>React Responsive website</p>
                                    <Link href="/works/reactRwebsite">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/apploading">
                                            <a>
                                                <Image
                                                    src={photo4}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>App Loading Website</p>
                                    <Link href="/works/apploading">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/ecommerce">
                                            <a>
                                                <Image
                                                    src={photo5}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>E-commerce Website</p>
                                    <Link href="/works/ecommerce">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/watchShope">
                                            <a>
                                                <Image
                                                    src={photo6}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Watch Shope website</p>
                                    <Link href="/works/watchShope">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/bookShope">
                                            <a>
                                                <Image
                                                    src={photo7}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Book Shope website</p>
                                    <Link href="/works/bookShope">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/barberShope">
                                            <a>
                                                <Image
                                                    src={photo8}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Barber Shope website</p>

                                    <Link href="/works/barberShope">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}

                                {/* work items start */}
                                <div className=' w-full'>
                                    <div className='workItems group'>
                                        <Link href="/works/animationsWebsite">
                                            <a>
                                                <Image
                                                    src={photo9}
                                                    alt="work1"
                                                    className='rounded-xl ease-in-out duration-500 group-hover:scale-110'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <p className=' text-xl my-4 px-2'>Glassmorphism Animated website</p>
                                    <Link href="/works/animationsWebsite">
                                        <a>
                                            <button className='commonbutton'>View Project</button>
                                        </a>
                                    </Link>
                                </div>
                                {/* work items end */}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
