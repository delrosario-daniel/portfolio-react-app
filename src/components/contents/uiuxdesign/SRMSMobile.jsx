import React from 'react'
import SRMSMobileImg1 from '../../../assets/SRMSMobile/srms-mobile-1.png'
import SRMSMobileImg2 from '../../../assets/SRMSMobile/srms-mobile-2.png'
import SRMSMobileImg3 from '../../../assets/SRMSMobile/srms-mobile-3.png'
import SRMSMobileImg4 from '../../../assets/SRMSMobile/srms-mobile-4.png'
import SRMSMobileImg5 from '../../../assets/SRMSMobile/srms-mobile-5.png'

const SRMSMobile = () => {
  const SRMSMobileImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262814/portfolio-react/SRMSMobile/srms-mobile-1_tobxxr.png'
  const SRMSMobileImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262143/portfolio-react/SRMSMobile/srms-mobile-2_mencrp.png'
  const SRMSMobileImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262195/portfolio-react/SRMSMobile/srms-mobile-3_tpdi3m.png'
  const SRMSMobileImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262138/portfolio-react/SRMSMobile/srms-mobile-4_awb5hc.png'
  const SRMSMobileImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262120/portfolio-react/SRMSMobile/srms-mobile-5_cgwlww.png'

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