import React from 'react'
import iBayanihanImg1 from '../../../assets/iBayanihan/iBayanihan-1.png'
import iBayanihanImg2 from '../../../assets/iBayanihan/iBayanihan-2.png'
import iBayanihanImg3 from '../../../assets/iBayanihan/iBayanihan-3.png'
import iBayanihanImg4 from '../../../assets/iBayanihan/iBayanihan-4.png'
import iBayanihanImg5 from '../../../assets/iBayanihan/iBayanihan-5.png'

const IBayanihan = () => {
  return (
    <div name='ibayanihan' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>iBayanihan App</p>
          </div>
          <div>
              <img src={iBayanihanImg1} alt="iBayanihan Image 1" />
              <img src={iBayanihanImg2} alt="iBayanihan Image 2" />
              <img src={iBayanihanImg3} alt="iBayanihan Image 3" />
              <img src={iBayanihanImg4} alt="iBayanihan Image 4" />
              <img src={iBayanihanImg5} alt="iBayanihan Image 5" />
          </div>
      </div>
    </div>
  )
}

export default IBayanihan