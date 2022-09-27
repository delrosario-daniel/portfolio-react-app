import React from 'react'
// import PhotographyImg1 from '../../../assets/Photography/photo-1.png'
// import PhotographyImg2 from '../../../assets/Photography/photo-2.jpg'
// import PhotographyImg3 from '../../../assets/Photography/photo-3.jpg'
// import PhotographyImg4 from '../../../assets/Photography/photo-4.jpg'
// import PhotographyImg5 from '../../../assets/Photography/photo-5.jpg'

const Photography = () => {
  const PhotographyImg1 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262127/portfolio-react/Photography/photo-1_fsz0ft.png'
  const PhotographyImg2 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664263282/portfolio-react/Photography/photo-2_bdpsr1.jpg'
  const PhotographyImg3 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664263074/portfolio-react/Photography/photo-3_eyobkb.jpg'
  const PhotographyImg4 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262107/portfolio-react/Photography/photo-4_becuzu.jpg'
  const PhotographyImg5 = 'https://res.cloudinary.com/dbkpnics7/image/upload/v1664262104/portfolio-react/Photography/photo-5_tf7dh3.jpg'

  return (
    <div name='photography' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>Photography</p>
            </div>
            <div>
                <img src={PhotographyImg1} alt="Photo 1" />
                <img src={PhotographyImg2} alt="Photo 2" />
                <img src={PhotographyImg3} alt="Photo 3" />
                <img src={PhotographyImg4} alt="Photo 4" />
                <img src={PhotographyImg5} alt="Photo 5" />
            </div>
        </div>
    </div>
  )
}

export default Photography