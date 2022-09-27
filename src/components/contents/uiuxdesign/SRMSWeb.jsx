import React from 'react'
// import SRMSWebImg1 from '../../../assets/SRMSWeb/srms-web-1.PNG'
// import SRMSWebImg2 from '../../../assets/SRMSWeb/srms-web-2.png'
// import SRMSWebImg3 from '../../../assets/SRMSWeb/srms-web-3.png'
// import SRMSWebImg4 from '../../../assets/SRMSWeb/srms-web-4.png'
// import SRMSWebImg5 from '../../../assets/SRMSWeb/srms-web-5.png'

const SRMSWeb = () => {
  const SRMSWebImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262114/portfolio-react/SRMSWeb/srms-web-1_bnpjcn.png'
  const SRMSWebImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262157/portfolio-react/SRMSWeb/srms-web-2_idmhyv.png'
  const SRMSWebImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262162/portfolio-react/SRMSWeb/srms-web-3_aratl4.png'
  const SRMSWebImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262163/portfolio-react/SRMSWeb/srms-web-4_yucve2.png'
  const SRMSWebImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262164/portfolio-react/SRMSWeb/srms-web-5_r745be.png'

  return (
    <div name='srmsweb' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>School Resource Management System Website</p>
          </div>
          <div>
              <img src={SRMSWebImg1} alt="SRMS Web Image 1" />
              <img src={SRMSWebImg2} alt="SRMS Web Image 2" />
              <img src={SRMSWebImg3} alt="SRMS Web Image 3" />
              <img src={SRMSWebImg4} alt="SRMS Web Image 4" />
              <img src={SRMSWebImg5} alt="SRMS Web Image 5" />
          </div>
      </div>
    </div>
  )
}

export default SRMSWeb