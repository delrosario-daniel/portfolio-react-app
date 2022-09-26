import React from 'react'
import NFTMarketplaceImg1 from '../../../assets/NFTMarketplace/nft-marketplace-1.png'
import NFTMarketplaceImg2 from '../../../assets/NFTMarketplace/nft-marketplace-2.png'
import NFTMarketplaceImg3 from '../../../assets/NFTMarketplace/nft-marketplace-3.png'
import NFTMarketplaceImg4 from '../../../assets/NFTMarketplace/nft-marketplace-4.png'
import NFTMarketplaceImg5 from '../../../assets/NFTMarketplace/nft-marketplace-5.png'

const NFTMarketplace = () => {
  return (
    <div name='nftmarketplace' className='w-full h-max bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pb-6'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F6BA26]'>NFT Marketplace App</p>
          </div>
          <div>
              <img src={NFTMarketplaceImg1} alt="NFT Marketplace Image 1" />
              <img src={NFTMarketplaceImg2} alt="NFT Marketplace Image 2" />
              <img src={NFTMarketplaceImg3} alt="NFT Marketplace Image 3" />
              <img src={NFTMarketplaceImg4} alt="NFT Marketplace Image 4" />
              <img src={NFTMarketplaceImg5} alt="NFT Marketplace Image 5" />
          </div>
      </div>
    </div>
  )
}

export default NFTMarketplace