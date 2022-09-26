import React from 'react'
import SRMSMobileImg1 from '../../../assets/SRMSMobile/srms-mobile-1.png'
import SRMSMobileImg2 from '../../../assets/SRMSMobile/srms-mobile-2.png'
import SRMSMobileImg3 from '../../../assets/SRMSMobile/srms-mobile-3.png'
import SRMSMobileImg4 from '../../../assets/SRMSMobile/srms-mobile-4.png'
import SRMSMobileImg5 from '../../../assets/SRMSMobile/srms-mobile-5.png'

const SRMSMobile = () => {
  return (
    <div name='srmsmobile' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>School Resource Management System Mobile App</p>
          </div>
          <div>
              <img src={SRMSMobileImg1} alt="SRMS Mobile Image 1" />
              <img src={SRMSMobileImg2} alt="SRMS Mobile Image 2" />
              <img src={SRMSMobileImg3} alt="SRMS Mobile Image 3" />
              <img src={SRMSMobileImg4} alt="SRMS Mobile Image 4" />
              <img src={SRMSMobileImg5} alt="SRMS Mobile Image 5" />
          </div>
      </div>
    </div>
  )
}

export default SRMSMobile