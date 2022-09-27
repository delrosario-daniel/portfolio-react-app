import React from 'react'
// import ShinYunaImg1 from '../../../assets/ShinYuna/shin-yuna.png'

const ShinYuna = () => {
  const ShinYunaImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262133/portfolio-react/ShinYuna/shin-yuna_gvtyp1.png'

  return (
    <div name='shinyuna' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Portrait</p>
            </div>
            <div>
                <img src={ShinYunaImg1} alt="Shin Yuna Image 1" />
            </div>
        </div>
    </div>
  )
}

export default ShinYuna