import React from 'react'
// import SmartParkingImg1 from '../../../assets/SmartParking/smart-parking-1.png'
// import SmartParkingImg2 from '../../../assets/SmartParking/smart-parking-2.png'
// import SmartParkingImg3 from '../../../assets/SmartParking/smart-parking-3.png'
// import SmartParkingImg4 from '../../../assets/SmartParking/smart-parking-4.png'
// import SmartParkingImg5 from '../../../assets/SmartParking/smart-parking-5.png'

const SmartParking = () => {
  const SmartParkingImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262094/portfolio-react/SmartParking/smart-parking-1_jodqhe.png'
  const SmartParkingImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262097/portfolio-react/SmartParking/smart-parking-2_y2fyxj.png'
  const SmartParkingImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262094/portfolio-react/SmartParking/smart-parking-3_xgqxwq.png'
  const SmartParkingImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262098/portfolio-react/SmartParking/smart-parking-4_ufundv.png'
  const SmartParkingImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262097/portfolio-react/SmartParking/smart-parking-5_gjr74e.png'

  return (
    <div name='smartpaking' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Smart Parking</p>
            </div>
            <div>
                <img src={SmartParkingImg1} alt="Smart Parking Image 1" />
                <img src={SmartParkingImg2} alt="Smart Parking Image 2" />
                <img src={SmartParkingImg3} alt="Smart Parking Image 3" />
                <img src={SmartParkingImg4} alt="Smart Parking Image 4" />
                <img src={SmartParkingImg5} alt="Smart Parking Image 5" />
            </div>
        </div>
    </div>
  )
}

export default SmartParking