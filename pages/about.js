import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import MenuBar from '../components/MenuBar'
import photo from "../images/Saykot.jpg";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link';


export default function About() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    const menubarToggle = () => {

        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className=" relative min-h-screen w-full py-5 sm:py-16 flex justify-center items-center bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
            {/* animations div */}
            <div className="absolute h-full w-full top-0 left-0">
                <div className=" fixed top-28 left-44 w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-purple-500 animate-zoom"></div>
                <div className=" fixed bottom-28 left-28 w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-yellow-500"></div>
                <div className=" fixed bottom-48 right-20 w-0 sm:w-32 h-0 sm:h-32 rounded-full bg-white animate-rotated"></div>
                <div className=" fixed top-[300px] left-[500px] w-0 sm:w-16 h-0 sm:h-16 rounded-full bg-pink-500 animate-updown"></div>
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
                            <h4 className=' text-center text-xl sm:text-3xl md:text-4xl font-semibold py-2 sm:py-5 md:py-10'>About Me</h4>
                            <div className='flex flex-wrap'>
                                <div className=' w-full md:w-[40%] flex justify-center'>
                                    <div className=' w-[90%] sm:w-[70%] md:w-[80%]'>
                                        <Image
                                            src={photo}
                                            alt="Picture of the author"
                                            className='w-full h-full object-cover rounded-lg'
                                        />
                                    </div>
                                </div>
                                <div className=' w-full md:w-[60%] md:mt-0 mt-5 sm:text-lg'>
                                    <p>Hello, I am Saykot Hossain Shohel a selftaught full stack web developer. I love new technology to learn and implement in projects. I have clear knowledge of software developement life cycle and have working experience on both frontend and backend also some devops tools like Docker, Kubernetes, Jenkins, Ansible, AWS EC2 and Linux. Primarily, I work on Javasctipt but have basic knowledge on several programing languages like python and php.</p>

                                    {/* skillls */}
                                    <div>
                                        <h3 className=' text-xl mt-5 mb-2 font-semibold'>Skills</h3>
                                        <div className=' mb-5'>
                                            <h6 className='mb-2'>Frontend :</h6>
                                            <div className='flex flex-wrap'>
                                                <span className='skilitem'>HTML</span>
                                                <span className='skilitem'>CSS</span>
                                                <span className='skilitem'>Javascript</span>
                                                <span className='skilitem'>Tailwind CSS</span>
                                                <span className='skilitem'>Bootstap</span>
                                                <span className='skilitem'>React.js</span>
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <h6 className='my-2'>Backend / Full Stack :</h6>
                                            <div className='flex flex-wrap'>
                                                <span className='skilitem'>Node.js</span>
                                                <span className='skilitem'>Express.js</span>
                                                <span className='skilitem'>Next.js</span>
                                                <span className='skilitem'>Typescript</span>
                                                <span className='skilitem'>Mongodb</span>
                                                <span className='skilitem'>Mongoose</span>
                                                <span className='skilitem'>Mysql</span>
                                            </div>
                                        </div>
                                        <div className=' mb-5'>
                                            <h6 className='my-2'>Oparation / Devops :</h6>
                                            <div className='flex flex-wrap'>
                                                <span className='skilitem'>Linux</span>
                                                <span className='skilitem'>AWS EC2</span>
                                                <span className='skilitem'>Docker</span>
                                                <span className='skilitem'>Kubernetes</span>
                                                <span className='skilitem'>Jenkins</span>
                                                <span className='skilitem'>Ansible</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* skillls */}
                                    {/* education */}
                                    <div className='my-5'>
                                        <span className=' text-red-500 mx-10 inline-block text-xl border-b-2 border-red-500'>Education</span>
                                        <div className="border-l-2 border-red-500">
                                            <div className=' relative'>
                                                <p className=' text-red-500 px-10 my-4'>2018 - 2021</p>
                                                <h3 className=' text-lg sm:text-xl px-10'>Bachelor of Arts in English - <span className=' sm:text-lg'>Victoria University Of Bangladesh</span></h3>
                                                <p className=' ml-10 my-2'>I have done Bachelor degree in English in Victoria University of Bangladesh in 2021.</p>
                                                <div className=' absolute top-2 left-[-10px]  h-5 w-5 bg-red-500 rounded-full'></div>
                                            </div>
                                            <div className=' relative'>
                                                <p className=' text-red-500 px-10 my-4'>2015 - 2017</p>
                                                <h3 className=' text-lg sm:text-xl px-10'>HSC- <span className=' sm:text-lg'>Bhulta High School And Collage.</span></h3>
                                                <p className=' ml-10 my-2'>I have completed Higher School Certificate study in Bhulta High School And Collage in 2017</p>
                                                <div className=' absolute top-2 left-[-10px]  h-5 w-5 bg-red-500 rounded-full'></div>
                                            </div>
                                            <div className=' relative'>
                                                <p className=' text-red-500 px-10 my-4'>2013</p>
                                                <h3 className=' text-lg sm:text-xl px-10'>SSC- <span className=' sm:text-lg'>Parabo Ideal High School</span></h3>
                                                <p className=' ml-10 my-2'>I have completed Secondery School Certificate study in Parabo Ideal High School in 2013.</p>
                                                <div className=' absolute top-2 left-[-10px] h-5 w-5 bg-red-500 rounded-full'></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* education */}
                                    {/* buttons */}
                                    <div className=' mt-10 mb-5 text-center'>
                                        <a href="CV.pdf" download>
                                            <button className='commonbutton'>Donnload CV</button>
                                        </a>
                                        <Link href="/contract">
                                            <a>
                                                <button className='commonbutton sm:mt-0 mt-2 '>Contract Me</button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
