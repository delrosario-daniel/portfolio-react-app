import React from 'react'
import {FiDownload} from 'react-icons/fi'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F6BA26]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Daniel, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                    I am a hardworking and goal-oriented individual with a great passion for design. 
                    I also developed a mature and responsible approach to any task or situation that 
                    I am presented with, ultimately benefiting the operations of the organization that 
                    I will work for.
                    </p>
                    <p className='md:hidden text-[#F6BA26] font-bold mt-6'>
                        Email me at:
                    </p>
                    <p className='md:hidden text-white font-bold mb-6'>
                        delrosario.danielallen@gmail.com
                    </p>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.mediafire.com/file/jze3zunxbxgxs55/Del_Rosario_Daniel_Allen-Resume.pdf/file" target="_blank">
                        <button className='md:hidden text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-[#F6BA26] hover:border-[#F6BA26] hover:text-black'>
                            Resume 
                            <span className='group:hover:rotate-90 duration-300'>
                                <FiDownload className='ml-3 hover:'/> 
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About