import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import photo2 from "../../images/work2.png";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Flipkart() {

    const router = useRouter()

    const goBack = () => {
        router.push("/works")
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
            <div className='min-h-[95vh] sm:min-h-[85vh] w-[92%] sm:w-[70%] px-5 sm:px-10 py-3 sm:p-5 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm p-10 border-2 border-white border-opacity-20 relative'>
                <div onClick={goBack} className=' z-10 absolute top-[-14px] right-[-14px] h-12 w-12 bg-white bg-opacity-30 shadow shadow-white hover:bg-pink-500 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center backdrop-blur-lg cursor-pointer group'>
                    < AiOutlineClose className=' text-lg text-red-600 group-hover:text-white' />
                </div>

                <div className='w-full'>
                    <Image
                        src={photo2}
                        alt="photo1"
                        className='w-full h-full object-cover rounded-xl'
                    />
                </div>

                <div className=' mt-3 sm:mt-5'>
                    {/* <Link href="https://saykotflipkart.herokuapp.com/">
                        <a target="_blank" rel="noopener noreferrer" >
                            <button className='commonbutton mt-3 lg:mt-0'>Live Demo</button>
                        </a>
                    </Link> */}
                    <Link href="https://github.com/Saykot1997/Flipkartclone">
                        <a target="_blank" rel="noopener noreferrer" >
                            <button className='commonbutton mt-3 lg:mt-0'>Scorce Code</button>
                        </a>
                    </Link>
                    <Link href="https://hub.docker.com/repository/docker/saykot/flipkart-clone-frontend">
                        <a target="_blank" rel="noopener noreferrer" >
                            <button className='commonbutton mt-3 lg:mt-0'>Docker Image</button>
                        </a>
                    </Link>
                </div>

                <h3 className=' text-lg sm:text-2xl my-3 sm:my-5 font-semibold'>E-commerce Website</h3>

                <p className=' text-gray-700 text-sm sm:text-base'>This is a flipkart clone e-commerce website.The purpose of making this website to enhance the personal skill of web developement and programing.
                </p>

                {/* Features */}
                <h3 className=' text-lg sm:text-xl font-semibold text-gray-800 mt-3'>Features :</h3>
                <div>
                    <p className='featuresItem'><span className=' mr-3 text-lg font-semibold'>*</span> See all products, categories, place Order, see order status </p>
                    <p className='featuresItem'><span className=' mr-3 text-lg font-semibold'>*</span> Add to card, update add to card </p>
                    <p className='featuresItem'><span className=' mr-3 text-lg font-semibold'>*</span> Create an account.</p>
                </div>
                {/* Features */}

                <div className='my-5 '>
                    <h3 className=' text-lg sm:text-xl my-3 sm:my-5 text-gray-800 font-semibold'>Technologies are used :</h3>
                    <div className=' mb-5'>
                        <h6 className='mb-2'>Frontend :</h6>
                        <div className='flex flex-wrap'>
                            <span className='skilitem'>React.js</span>
                            <span className='skilitem'>useContext</span>
                            <span className='skilitem'>Styled Copmonents</span>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <h6 className='my-2'>Backend / Full Stack :</h6>
                        <div className='flex flex-wrap'>
                            <span className='skilitem'>Node.js</span>
                            <span className='skilitem'>Express.js</span>
                            <span className='skilitem'>Json Web Token</span>
                            <span className='skilitem'>Mongodb</span>
                            <span className='skilitem'>Mongoose</span>
                        </div>
                    </div>
                    <div className=' mb-5'>
                        <h6 className='my-2'>Oparation / Devops :</h6>
                        <div className='flex flex-wrap'>
                            <span className='skilitem'>Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
