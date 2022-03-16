import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import photo2 from "../../images/work4.png";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Apploading() {

    const router = useRouter()

    const goBack = () => {
        router.push("/works")
    }
    const [showVideo, setShowVideo] = useState(false);




    return (
        <div className=" relative min-h-screen w-full py-5 sm:py-16 flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
            {/* animations div */}
            <div className="absolute h-full w-full top-0 left-0">
                <div className=" fixed top-28 left-44 sm:w-16 sm:h-16 rounded-full bg-purple-500 animate-zoom"></div>
                <div className=" fixed bottom-28 left-28 sm:w-16 sm:h-16 rounded-full bg-yellow-500"></div>
                <div className=" fixed bottom-48 right-20 w-0 sm:w-32 h-0 sm:h-32 rounded-full bg-white animate-rotated"></div>
                <div className=" fixed top-[300px] left-[500px] w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-pink-500 animate-updown"></div>
            </div>
            <div className='min-h-[95vh] sm:min-h-[85vh] w-[92%] sm:w-[70%] px-5 sm:px-10 py-3 sm:p-5 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm p-10 border-2 border-white border-opacity-20 relative'>
                <div onClick={goBack} className=' z-10 absolute top-[-14px] right-[-14px] h-12 w-12 bg-white bg-opacity-30 shadow shadow-white hover:bg-pink-500 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center backdrop-blur-lg cursor-pointer group'>
                    < AiOutlineClose className=' text-lg text-red-600 group-hover:text-white' />
                </div>
                {
                    showVideo ?

                        <div className=' w-full rounded-xl overflow-hidden shadow-sm shadow-white' >
                            <iframe className=' w-full h-[200p] sm:h-[300px] md:h-[400px] lg:h-[560px]' src="https://www.youtube.com/embed/MNAvRN5biHU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        :
                        <div className='w-full'>
                            <Image
                                src={photo2}
                                alt="photo1"
                                className='w-full h-full object-cover rounded-xl'
                            />
                        </div>
                }

                <div className=' mt-3 sm:mt-5'>
                    <button onClick={() => setShowVideo(!showVideo)} className='commonbutton mt-3 lg:mt-0'>Live video Demo</button>
                    <Link href="https://saykot1997.github.io/App-loading-website/">
                        <a target="_blank" rel="noopener noreferrer" >
                            <button className='commonbutton mt-3 lg:mt-0'>Live Demo</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/Saykot1997/App-loading-website">
                        <a target="_blank" rel="noopener noreferrer" >
                            <button className='commonbutton mt-3 lg:mt-0'>Scorce Code</button>
                        </a>
                    </Link>
                </div>

                <h3 className=' text-lg sm:text-2xl my-3 sm:my-5 font-semibold'>App Loading Website</h3>

                <p className=' text-gray-700 text-sm sm:text-base'>This is a static html responsive website.The purpose of making this website to enhance the personal skill of web developement and programing.
                </p>

                <div className='my-5 '>
                    <h3 className=' text-lg sm:text-xl my-3 sm:my-5 text-gray-800 font-semibold'>Technologies are used :</h3>
                    <div className=' mb-5'>
                        <h6 className='mb-2'>Frontend :</h6>
                        <div className='flex flex-wrap'>
                            <span className='skilitem'>HTML</span>
                            <span className='skilitem'>CSS</span>
                            <span className='skilitem'>Bootstap</span>
                            <span className='skilitem'>Javascript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
