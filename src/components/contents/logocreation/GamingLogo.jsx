import React from 'react'
// import GamingLogoImg1 from '../../../assets/GamingLogo/gaming-logo-1.png'
// import GamingLogoImg2 from '../../../assets/GamingLogo/gaming-logo-2.png'
// import GamingLogoImg3 from '../../../assets/GamingLogo/gaming-logo-3.png'
// import GamingLogoImg4 from '../../../assets/GamingLogo/gaming-logo-4.jpg'
// import GamingLogoImg5 from '../../../assets/GamingLogo/gaming-logo-5.jpg'
// import GamingLogoImg6 from '../../../assets/GamingLogo/gaming-logo-6.jpg'

const GamingLogo = () => {
  const GamingLogoImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262115/portfolio-react/GamingLogo/gaming-logo-1_io9jkk.png'
  const GamingLogoImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262101/portfolio-react/GamingLogo/gaming-logo-2_z2tizg.png'
  const GamingLogoImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262112/portfolio-react/GamingLogo/gaming-logo-3_uvhmyb.png'
  const GamingLogoImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262131/portfolio-react/GamingLogo/gaming-logo-4_klwakq.jpg'
  const GamingLogoImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262100/portfolio-react/GamingLogo/gaming-logo-5_qyia4h.jpg'
  const GamingLogoImg6 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262156/portfolio-react/GamingLogo/gaming-logo-6_aklr3h.jpg'

  return (
    <div name='gaminglogo' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Gaming Logo</p>
        </div>
        <div>
            <img src={GamingLogoImg1} alt="Gaming Logo Image 1" />
            <img src={GamingLogoImg2} alt="Gaming Logo Image 2" />
            <img src={GamingLogoImg3} alt="Gaming Logo Image 3" />
            <img src={GamingLogoImg4} alt="Gaming Logo Image 4" />
            <img src={GamingLogoImg5} alt="Gaming Logo Image 5" />
            <img src={GamingLogoImg6} alt="Gaming Logo Image 6" />
        </div>
      </div>
    </div>
  )
}

export default GamingLogo