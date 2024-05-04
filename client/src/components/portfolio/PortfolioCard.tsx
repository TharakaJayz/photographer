import React from 'react'
import { images } from '../../assets/Images'

type Props = {}

const PortfolioCard = (props: Props) => {
  return (
    <div className='w-p31 h-vh40 border border-red-500 '>
    <div className='w-full'>
        <section>
            <h3>title</h3>
            <h2>desc</h2>
        </section>
     <img src={images[0]} alt="" className='w-full h-vh20' />
    </div>
     </div>
  )
}

export default PortfolioCard