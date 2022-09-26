import React from 'react'
import DesignTrendsImg1 from '../../../assets/DesignTrends/design-trends-1.png'
import DesignTrendsImg2 from '../../../assets/DesignTrends/design-trends-2.png'

const DesignTrends = () => {
  return (
    <div name='designtrends' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Design Trends 2022</p>
            </div>
            <div>
                <img src={DesignTrendsImg1} alt="Design Trends Image 1" />
                <img src={DesignTrendsImg2} alt="Design Trends Image 2" />
            </div>
        </div>
    </div>
  )
}

export default DesignTrends