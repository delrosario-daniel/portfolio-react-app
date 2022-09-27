import React from 'react'
// import iBayanihanLogoImg1 from '../../../assets/iBayanihanLogo/ibayanihan-logo-1.png'
// import iBayanihanLogoImg2 from '../../../assets/iBayanihanLogo/ibayanihan-logo-2.png'
// import iBayanihanLogoImg3 from '../../../assets/iBayanihanLogo/ibayanihan-logo-3.png'

const IBayanihanLogo = () => {
  const iBayanihanLogoImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262115/portfolio-react/iBayanihanLogo/ibayanihan-logo-1_m4ixuo.png'
  const iBayanihanLogoImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262118/portfolio-react/iBayanihanLogo/ibayanihan-logo-2_fvdwhq.png'
  const iBayanihanLogoImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262104/portfolio-react/iBayanihanLogo/ibayanihan-logo-3_pzrufi.png'

  return (
    <div name='ibayanihanlogo' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>iBayanihan Logo</p>
          </div>
          <div>
              <img src={iBayanihanLogoImg1} alt="iBayanihan Logo Image 1" />
              <img src={iBayanihanLogoImg2} alt="iBayanihan Logo Image 2" />
              <img src={iBayanihanLogoImg3} alt="iBayanihan Logo Image 3" />
          </div>
      </div>
    </div>
  )
}

export default IBayanihanLogo