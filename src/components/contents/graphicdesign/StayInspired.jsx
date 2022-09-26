import React from 'react'
import StayInspiredImg1 from '../../../assets/StayInspired/stay-inspired-1.png'

const StayInspired = () => {
  return (
    <div name='stayinspired' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>How to Stay Inspired as a Designer</p>
            </div>
            <div>
                <img src={StayInspiredImg1} alt="Stay Inspired Image 1" />
            </div>
        </div>
    </div>
  )
}

export default StayInspired