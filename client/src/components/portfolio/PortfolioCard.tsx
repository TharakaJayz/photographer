import React from 'react'
import { images, images2 } from '../../assets/Images'

type Props = {
  title:string,
  desc:string
  imgUrl:string
}

const PortfolioCard = (props: Props) => {
  return (
    <div className='w-p31 h-vh40   '>
    <div className='w-full h-full flex flex-col justify-between'>
        <section className='capitalize'>
            <h3 >{props.title}</h3>
            <h1 className='text-xl font-semibold '>{props.desc}</h1>
        </section>
     <img src={props.imgUrl} alt="" className='w-full h-vh30 object-cover object-top' />
    </div>
     </div>
  )
}

export default PortfolioCard