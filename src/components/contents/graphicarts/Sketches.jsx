import React from 'react'
// import SketchImg1 from '../../../assets/Sketches/sketch-1.png'
// import SketchImg2 from '../../../assets/Sketches/sketch-2.png'
// import SketchImg3 from '../../../assets/Sketches/sketch-3.png'
// import SketchImg4 from '../../../assets/Sketches/sketch-4.png'

const Sketches = () => {
  const SketchImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262180/portfolio-react/Sketches/sketch-1_fhcipo.png'
  const SketchImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262148/portfolio-react/Sketches/sketch-2_drxgpz.png'
  const SketchImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262161/portfolio-react/Sketches/sketch-3_ptpyva.png'
  const SketchImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262141/portfolio-react/Sketches/sketch-4_pu8npt.png'

  return (
    <div name='sketches' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Sketches</p>
            </div>
            <div>
                <img src={SketchImg1} alt="Sketches Image 1" />
                <img src={SketchImg2} alt="Sketches Image 2" />
                <img src={SketchImg3} alt="Sketches Image 3" />
                <img src={SketchImg4} alt="Sketches Image 4" />
            </div>
        </div>
    </div>
  )
}

export default Sketches