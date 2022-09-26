import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import FocusTemplate from '../assets/FocusOptical/focus-optical-1.png'
import iBayanihanTemplate from '../assets/iBayanihan/iBayanihan-1.png'
import NFTMarketplaceTemplate from '../assets/NFTMarketplace/nft-marketplace-1.png'
import SRMSMobileTemplate from '../assets/SRMSMobile/srms-mobile-1.png'
import SRMSWebTemplate from '../assets/SRMSWeb/srms-web-1.PNG'

import DesignTrendsTemplate from '../assets/DesignTrends/design-trends-1.png'
import StayInspiredTemplate from '../assets/StayInspired/stay-inspired-1.png'
import TechTrendsTemplate from '../assets/TechTrends/tech-trends-1.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-max text-gray-300 bg-[#0a192f] pt-20'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Work</p>
                <p className='py-6'>// Check out some of my work</p>
            </div>

            {/* work category */}
            <div>
                <p className='text-2xl font-bold text-gray-300 py-6'>Graphic Designs</p>
            </div>

            {/* container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                {/* grid item */}
                <div style={{backgroundImage: `url(${DesignTrendsTemplate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Design Trends 2022
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/designtrends">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${StayInspiredTemplate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Stay Inspired
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/stayinspired">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${TechTrendsTemplate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tech Trends
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/techtrends">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


            {/* work category */}
            <div>
                <p className='text-2xl font-bold text-gray-300 py-6'>UI/UX Designs</p>
            </div>
            
            {/* container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                {/* grid item */}
                <div style={{backgroundImage: `url(${FocusTemplate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Focus Optical Website
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/focusoptical">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${iBayanihanTemplate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            iBayanihan App
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/ibayanihan">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${NFTMarketplaceTemplate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NFT Marketplace App
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/nftmarketplace">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* grid item */}
                <div style={{backgroundImage: `url(${SRMSMobileTemplate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           SRMS Mobile App
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/srmsmobile">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${SRMSWebTemplate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        SRMS Website
                        </span>
                        <div className='pt-8 text-center'>
                            <Link to="/srmsweb">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Work