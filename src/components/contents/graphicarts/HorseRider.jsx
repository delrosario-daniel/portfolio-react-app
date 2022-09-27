import React from 'react'
// import HorseRiderImg1 from '../../../assets/HorseRider/horse-rider-1.jpg'
// import HorseRiderImg2 from '../../../assets/HorseRider/horse-rider-2.png'
// import HorseRiderImg3 from '../../../assets/HorseRider/horse-rider-3.png'

const HorseRider = () => {
  const HorseRiderImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262185/portfolio-react/HorseRider/horse-rider-1_wqmfix.jpg'
  const HorseRiderImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262176/portfolio-react/HorseRider/horse-rider-2_zmzchn.png'
  const HorseRiderImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262175/portfolio-react/HorseRider/horse-rider-3_f34hog.png'

  return (
    <div name='horserider' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Character Design</p>
            </div>
            <div>
                <img src={HorseRiderImg1} alt="Horse Rider Image 1" />
                <img src={HorseRiderImg2} alt="Horse Rider Image 2" />
                <img src={HorseRiderImg3} alt="Horse Rider Image 3" />
            </div>
        </div>
    </div>
  )
}

export default HorseRider