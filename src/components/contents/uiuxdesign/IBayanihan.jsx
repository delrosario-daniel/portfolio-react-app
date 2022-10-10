import React from 'react'
// import iBayanihanImg1 from '../../../assets/iBayanihan/iBayanihan-1.png'
// import iBayanihanImg2 from '../../../assets/iBayanihan/iBayanihan-2.png'
// import iBayanihanImg3 from '../../../assets/iBayanihan/iBayanihan-3.png'
// import iBayanihanImg4 from '../../../assets/iBayanihan/iBayanihan-4.png'
// import iBayanihanImg5 from '../../../assets/iBayanihan/iBayanihan-5.png'

const IBayanihan = () => {
  const iBayanihanImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266875/portfolio-react/iBayanihan/iBayanihan-1_prheko.png'
  const iBayanihanImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266879/portfolio-react/iBayanihan/iBayanihan-2_vszx0z.png'
  const iBayanihanImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266858/portfolio-react/iBayanihan/iBayanihan-3_zlfyvh.png'
  const iBayanihanImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266879/portfolio-react/iBayanihan/iBayanihan-4_jfy2jr.png'
  const iBayanihanImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664266866/portfolio-react/iBayanihan/iBayanihan-5_vfgjaf.png'

  const iBayanihanCS1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409348/portfolio-react/iBayanihan/Case-Study-1_zsv0ts.png'
  const iBayanihanCS2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409318/portfolio-react/iBayanihan/Case-Study-2_atplet.png'
  const iBayanihanCS3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409319/portfolio-react/iBayanihan/Case-Study-3_q5izt7.png'
  const iBayanihanCS4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409334/portfolio-react/iBayanihan/Case-Study-4_hacsfy.png'
  const iBayanihanCS5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409730/portfolio-react/iBayanihan/Case-Study-5_j76b2r.png'
  const iBayanihanCS6 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409325/portfolio-react/iBayanihan/Case-Study-6_lmgmvj.png'
  const iBayanihanCS7 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409328/portfolio-react/iBayanihan/Case-Study-7_w6yzgw.png'
  const iBayanihanCS8 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1665409342/portfolio-react/iBayanihan/Case-Study-8_jwgqqt.png'

  return (
    <div name='ibayanihan' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>UI/UX Case Study - iBayanihan App</p>
          </div>
          <div>
              {/* <img src={iBayanihanImg1} alt="iBayanihan Image 1" />
              <img src={iBayanihanImg2} alt="iBayanihan Image 2" />
              <img src={iBayanihanImg3} alt="iBayanihan Image 3" />
              <img src={iBayanihanImg4} alt="iBayanihan Image 4" />
              <img src={iBayanihanImg5} alt="iBayanihan Image 5" /> */}

              <img src={iBayanihanCS1} alt="iBayanihan CS 1" />
              <img src={iBayanihanCS2} alt="iBayanihan CS 2" />
              <img src={iBayanihanCS3} alt="iBayanihan CS 3" />
              <img src={iBayanihanCS4} alt="iBayanihan CS 4" />
              <img src={iBayanihanCS5} alt="iBayanihan CS 5" />
              <img src={iBayanihanCS6} alt="iBayanihan CS 6" />
              <img src={iBayanihanCS7} alt="iBayanihan CS 7" />
              <img src={iBayanihanCS8} alt="iBayanihan CS 8" />
          </div>
      </div>
    </div>
  )
}

export default IBayanihan