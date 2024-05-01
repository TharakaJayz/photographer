import React from 'react'
import HeaderSection from '../components/HeaderSection'
import CategoryCard from '../components/portfolio/CategoryCard'
import { images } from '../assets/Images'

interface Props {
    
}

const Portfolio = (props: Props) => {
    return (
        <div className='w-full'>
          <HeaderSection     imgUrl={images[1]} title="Portfolio" desc="this is portfolio page" TextLogic = {true} />
          <div className='w-full px-vw5'>
            <div className='w-full'>
                <section className='w-full flex justify-between items-center'>
                    <CategoryCard svg={""} title='Weddings' desc='See our wedding albums'/>
                    <CategoryCard svg={""} title='Engagements' desc='See our engagement albums'/>
                    <CategoryCard svg={""} title='Pre-shoots' desc='See our pre-shoots albums'/>
                    
                </section>
            </div>
          </div>
          
        </div>
    )
}

export default Portfolio
