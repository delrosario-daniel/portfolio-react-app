import React from 'react'
// import FocusImg from '../../../assets/FocusOptical/focus-optical.png'
// import FocusImg1 from '../../../assets/FocusOptical/focus-optical-1.png'
// import FocusImg2 from '../../../assets/FocusOptical/focus-optical-2.png'
// import FocusImg3 from '../../../assets/FocusOptical/focus-optical-3.png'
// import FocusImg4 from '../../../assets/FocusOptical/focus-optical-4.png'
// import FocusImg5 from '../../../assets/FocusOptical/focus-optical-5.png'
// import FocusImg6 from '../../../assets/FocusOptical/focus-optical-6.png'

const FocusOptical = () => {
  const FocusImg = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664267255/portfolio-react/FocusOptical/focus-optical-low_p4bbmm.png'

  return (
    <div name='focusoptical' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Focus Optical Website</p>
            </div>
            <div>
                {/* <img src={FocusImg1} alt="Focus Image 1" />
                <img src={FocusImg2} alt="Focus Image 2" />
                <img src={FocusImg3} alt="Focus Image 3" />
                <img src={FocusImg4} alt="Focus Image 4" />
                <img src={FocusImg5} alt="Focus Image 5" />
                <img src={FocusImg6} alt="Focus Image 6" /> */}
                <img src={FocusImg} alt="Focus Image" />
            </div>
        </div>
    </div>
  )
}

export default FocusOptical