import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import FocusTemplate from '../assets/FocusOptical/focus-optical-1.png'
// import iBayanihanTemplate from '../assets/iBayanihan/iBayanihan-1.png'
// import NFTMarketplaceTemplate from '../assets/NFTMarketplace/nft-marketplace-1.png'
// import SRMSMobileTemplate from '../assets/SRMSMobile/srms-mobile-1.png'
// import SRMSWebTemplate from '../assets/SRMSWeb/srms-web-1.PNG'

// import DesignTrendsTemplate from '../assets/DesignTrends/design-trends-1.png'
// import StayInspiredTemplate from '../assets/StayInspired/stay-inspired-1.png'
// import TechTrendsTemplate from '../assets/TechTrends/tech-trends-1.png'

// import SketchesTemplate from '../assets/Sketches/sketch-1.png'
// import HorseRiderTemplate from '../assets/HorseRider/horse-rider-1.jpg'
// import ShinYunaTemplate from '../assets/ShinYuna/shin-yuna.png'

// import iBayanihanLogoTemplate from '../assets/iBayanihanLogo/ibayanihan-logo-1.png'
// import SmartParkingTemplate from '../assets/SmartParking/smart-parking-1.png'
// import GamingLogoTemplate from '../assets/GamingLogo/gaming-logo-1.png'

// import PhotographyTemplate from '../assets/Photography/photo-1.png'

const Work = () => {
    const FocusTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664267255/portfolio-react/FocusOptical/focus-optical-low_p4bbmm.png'
    const iBayanihanTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266875/portfolio-react/iBayanihan/iBayanihan-1_prheko.png'
    const NFTMarketplaceTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262191/portfolio-react/NFTMarketplace/nft-marketplace-1_nfbmp9.png'
    const SRMSMobileTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262814/portfolio-react/SRMSMobile/srms-mobile-1_tobxxr.png'
    const SRMSWebTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262114/portfolio-react/SRMSWeb/srms-web-1_bnpjcn.png'

    const DesignTrendsTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262189/portfolio-react/DesignTrends/design-trends-1_oc4dfb.png'
    const StayInspiredTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262125/portfolio-react/StayInspired/stay-inspired-1_mri9em.png'
    const TechTrendsTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262127/portfolio-react/TechTrends/tech-trends-1_cxfy0f.png'

    const SketchesTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262180/portfolio-react/Sketches/sketch-1_fhcipo.png'
    const HorseRiderTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262185/portfolio-react/HorseRider/horse-rider-1_wqmfix.jpg'
    const ShinYunaTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262133/portfolio-react/ShinYuna/shin-yuna_gvtyp1.png'

    const iBayanihanLogoTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262115/portfolio-react/iBayanihanLogo/ibayanihan-logo-1_m4ixuo.png'
    const SmartParkingTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262094/portfolio-react/SmartParking/smart-parking-1_jodqhe.png'
    const GamingLogoTemplate = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262115/portfolio-react/GamingLogo/gaming-logo-1_io9jkk.png'

    const PhotographyTemplate  = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262127/portfolio-react/Photography/photo-1_fsz0ft.png'

    return (
        <div name='work' className='w-full md:h-max text-gray-300 bg-[#0a192f] pt-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Work</p>
                    <p className='py-6'>// Check out some of my work</p>
                </div>


                {/* work category */}
                <div>
                    <p className='text-2xl font-bold text-[#F6BA26] py-6'>UI/UX Designs</p>
                </div>
                
                {/* container */}
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${iBayanihanTemplate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                UI/UX Case Study
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/ibayanihan">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

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


                {/* work category */}
                <div>
                    <p className='text-2xl font-bold text-[#F6BA26] py-6'>Graphic Designs</p>
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
                    <p className='text-2xl font-bold text-[#F6BA26] py-6'>Graphic Arts</p>
                </div>

                {/* container */}
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${SketchesTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Sketches
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/sketches">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${HorseRiderTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Character Design
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/horserider">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${ShinYunaTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portrait
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/shinyuna">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>


                {/* work category */}
                <div>
                    <p className='text-2xl font-bold text-[#F6BA26] py-6'>Logo Creation</p>
                </div>

                {/* container */}
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${iBayanihanLogoTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                iBayanihan Logo
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/ibayanihanlogo">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${SmartParkingTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Smart Parking
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/smartparking">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${GamingLogoTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Gaming Logo
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/gaminglogo">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                
                {/* work category */}
                <div>
                    <p className='text-2xl font-bold text-[#F6BA26] py-6'>Photography</p>
                </div>

                {/* container */}
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6'> 

                    {/* grid item */}
                    <div style={{backgroundImage: `url(${PhotographyTemplate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Photography
                            </span>
                            <div className='pt-8 text-center'>
                                <Link to="/photography">
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