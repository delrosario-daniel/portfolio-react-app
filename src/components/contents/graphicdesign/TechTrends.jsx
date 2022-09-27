import React from 'react'
// import TechTrendsImg1 from '../../../assets/TechTrends/tech-trends-1.png'

const TechTrends = () => {
  const TechTrendsImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262127/portfolio-react/TechTrends/tech-trends-1_cxfy0f.png'
  
  return (
    <div name='techtrends' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Technology Trends of 2022</p>
        </div>
        <div>
            <img src={TechTrendsImg1} alt="Tech Trends Image 1" />
        </div>
    </div>
</div>
  )
}

export default TechTrends