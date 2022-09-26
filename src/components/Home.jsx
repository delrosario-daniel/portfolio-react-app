import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import {Link} from 'react-scroll'
import {Link} from 'react-router-dom';

const Home = () => {
    const [homepage, setHomepage] = useState(false)
    const handleClick = () => setHomepage(!homepage)

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#F6BA26]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fffdfd]'>Daniel Allen Del Rosario</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Designer.</h2>
            {/* <p className='text-[#8892b0] py-4 max-w-[800px]'>
                I am a hardworking and goal-oriented individual with a great passion for design. 
                I also developed a mature and responsible approach to any task or situation that 
                I am presented with, ultimately benefiting the operations of the organization that 
                I will work for.
            </p> */}
            <div>
                {/* <Link onClick={handleClick} to="work" smooth={true} duration={500}> */}
                <Link to="/work">
                    <button className='text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-[#F6BA26] hover:border-[#F6BA26] hover:text-black'>
                        View Work
                        <span className='group:hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 hover:'/> 
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home